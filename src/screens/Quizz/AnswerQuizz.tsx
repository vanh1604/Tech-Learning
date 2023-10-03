import { StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Box, Column, Icon, IconButton, Progress, Row, Text } from "native-base";

import { quizzes } from "../../constansts/items";
import { STYLES, colors } from "../../constansts/style";
import QuizzItem from "../../components/Quizz/QuizzItem";
import QuizzDisplay from "../../components/Quizz/QuizzDisplay";
import Footer from "../../components/Quizz/Footer/Footer";
import Header1 from "../../components/Header1";
import BackBtn from "../../components/BackBtn";
import NotificationBox from "../../components/NotificationBox";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ComponentHeader from "../../components/Header/ComponentHeader";
import BackgroundLayout from "../../components/BackgroundLayout";

const AnswerQuizz = () => {
	const navigation = useNavigation<any>();
	const questions: any = useSelector<RootState>((state) => state.answer);
	const [order, setOrder] = useState(1);
	const [showModal, setShowModal] = useState(false);
	const minOrder = 1;
	const maxOrder = questions.length;
	const onEndQuiz = () => {
		toggleNoti();
	};
	const onOrderChange = (order: number) => {
		let newOrder = order;
		if (newOrder > maxOrder) {
			//quizz complete handler
			newOrder = maxOrder;
			onEndQuiz();
		}
		if (newOrder < minOrder) {
			newOrder = minOrder; //First question
		}
		// navigation.navigate("Quizz", { order: newOrder });
		setOrder(newOrder);
	};
	const toggleNoti = () => {
		setShowModal((prevState) => !prevState);
	};
	const [countdown, setCountdown] = useState(180); // Initial countdown time in seconds
	const currentQuestion = questions[order - 1];
	const ansOptions = currentQuestion.ans.map((item: any) => {
		return {
			...item,
		};
	});
	useEffect(() => {
		const intervalId = setInterval(() => {
			if (countdown === 0) {
				onEndQuiz();
				clearInterval(intervalId); // Dừng đếm ngược khi đạt 0
			} else {
				setCountdown(countdown - 1);
			}
		}, 1000); // Cập nhật mỗi 1 giây
		return () => {
			clearInterval(intervalId); // Hủy bỏ interval khi component bị hủy
		};
	}, [countdown]);
	const timeFormatted = (countdown: number) => {
		const minute = Math.floor(countdown / 60);
		const second = countdown % 60;
		const formatted = (n: number) => (n < 10 && n >= 0 ? `0${n}` : `${n}`);
		const minuteFormatted = formatted(minute);
		const secondFormatted = formatted(second);
		return `${minuteFormatted}:${secondFormatted}`;
	};
	const countUserRightAns = () => {
		let dem = 0;
		questions.forEach((question: (typeof questions)[0]) => {
			if (question.rightAns === question.userAns) dem++;
		});
		return dem;
	};
	const title = `Bạn đã trả lời đúng\n${countUserRightAns()}/${questions.length} câu`;
	return (
		<Column
			bgColor={"white"}
			flex={1}
			width={"100%"}
		>
			<ComponentHeader title="Giải đố" />

			<Box px={6}>
				<Box
					flexDirection={"row"}
					justifyContent={"space-between"}
					mt={6}
				>
					<Box flexDirection={"row"}>
						<Text>Thời gian </Text>
						<Text bold>{timeFormatted(countdown)}</Text>
					</Box>
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
					title={currentQuestion.title}
					onOrderChange={onOrderChange}
					questions={questions}
				/>
			</Box>
			<NotificationBox
				title="Xin chúc mừng!"
				content={title}
				showModal={showModal}
				BottomBox={() => (
					<Box w={"80%"}>
						<BackgroundLayout style={styles.goBackButton}>
							<TouchableOpacity
								onPress={navigation.goBack}
								style={{ width: "100%", alignItems: "center" }}
							>
								<Text color={"#fff"}>XONG</Text>
							</TouchableOpacity>
						</BackgroundLayout>
					</Box>
				)}
			/>
		</Column>
	);
};

export default AnswerQuizz;

const styles = StyleSheet.create({
	goBackButton: {
		width: "100%",
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 12,
		paddingVertical: 8,
		borderRadius: 8,
	},
});
