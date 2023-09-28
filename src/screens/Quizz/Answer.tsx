import { StyleSheet } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Box, Column, Icon, IconButton, Progress, Row, Text } from "native-base";
import { quizzes } from "../../constansts/items";
import { STYLES, colors } from "../../constansts/style";
import QuizzItem from "../../components/Quizz/QuizzItem";
import QuizzDisplay from "../../components/Quizz/QuizzDisplay";
import Footer from "../../components/Quizz/Footer/Footer";
import Header1 from "../../components/Header1";
import BackBtn from "../../components/BackBtn";

const Answer = () => {
	const navigation = useNavigation<any>();
	const questions = quizzes;
	const [order, setOrder] = useState(1);
	const minOrder = 1;
	const maxOrder = questions.length;
	const onOrderChange = (order: number) => {
		let newOrder = order;
		if (newOrder > maxOrder) {
			newOrder = maxOrder;
			navigation.goBack();
		}
		if (newOrder < minOrder) newOrder = minOrder;

		setOrder(newOrder);
	};
	const thisAnswer = questions[order - 1];
	const ansOptions = thisAnswer.ans.map((item, index) => {
		return {
			...item,
		};
	});

	return (
		<Column
			bgColor={"white"}
			flex={1}
			width={"100%"}
		>
			<Header1
				title="Đáp án"
				LeftBtn={BackBtn}
			/>
			<Box px={6}>
				<Box
					flexDirection={"row"}
					justifyContent={"flex-end"}
					mt={6}
				>
					<Box height={"auto"}>
						<Text
							style={[
								STYLES.title,
								{
									textAlignVertical: "top",
								},
							]}
						>{`${order}/${questions.length}`}</Text>
					</Box>
				</Box>
				<Box
					w="100%"
					mb={8}
				>
					<Progress value={(order / questions.length) * 100} />
				</Box>
				<QuizzDisplay
					ans={ansOptions}
					order={order}
					title={thisAnswer.title}
					isAnswering
					questions={questions}
				/>
				<Footer
					isFirst={order == 1}
					isLast={order == questions.length}
					footerLeftOptions={{
						onPress: () => {
							onOrderChange(order - 1);
						},
					}}
					footerRightOptions={{
						onPress: () => {
							onOrderChange(order + 1);
						},
						endProgressTitle: "Xong",
					}}
				/>
			</Box>
		</Column>
	);
};

export default Answer;

const styles = StyleSheet.create({});
