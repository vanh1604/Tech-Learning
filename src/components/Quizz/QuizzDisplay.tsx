import React from "react";
import { Box, Text } from "native-base";
import QuizzItem, { QuizzItemProps } from "./QuizzItem";
import { STYLES } from "../../constansts/style";
import Footer from "./Footer/Footer";
import { quizzes } from "../../constansts/items";

export interface QuizzProps {
	ans: QuizzItemProps[];
	title: string;
	order: number;
	isAnswering?: boolean;
	onOrderChange?: any;
	questions?: any;
	onAnswer: (answer: QuizzItemProps) => void;
}

const QuizzDisplay = (props: QuizzProps) => {
	const questions: any = props.questions;
	const currentQuestion: (typeof questions)[0] = questions[props.order - 1];
	return (
		<Box>
			<Text style={[STYLES.title, { marginBottom: 4 }]}>Câu {props.order}:</Text>
			<Text mb={8}>{props.title}</Text>
			{props.ans.map((item, index) => {
				const isBold = (!props.isAnswering && currentQuestion.userAns === item.answer) || (props.isAnswering && item.answer == questions[item.order || 0].rightAns);
				return (
					<QuizzItem
						{...item}
						key={index}
						isUserChoice={isBold}
						onPress={() => props.onAnswer({ ...item, order: props.order - 1 })}
						order={props.order}
					/>
				);
			})}
			{!props.isAnswering && (
				<Footer
					isFirst={props.order == 1}
					isLast={props.order == props.questions.length}
					footerLeftOptions={{
						onPress: () => {
							props.onOrderChange(props.order - 1);
						},
					}}
					footerRightOptions={{
						onPress: () => {
							props.onOrderChange(props.order + 1);
						},
						endProgressTitle: "Nộp bài",
					}}
				/>
			)}
		</Box>
	);
};

export default QuizzDisplay;
