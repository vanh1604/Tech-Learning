import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import MainBackground from "../components/HomeTab/MainBackground";
import HomeHeader from "../components/Header/HomeHeader";
import { Column } from "native-base";
import CardList from "../components/Main/CardList";
import { useAppDispatch, useAppSelector } from "../store";
import { useIsFocused } from "@react-navigation/native";
import { quizz } from "../constansts/items";

const Quizz = () => {
	const dispatch = useAppDispatch();
	const isFocus = useIsFocused();
	const quiz = useAppSelector((state) => state.quiz);
	useEffect(() => {
		// dispatch(clearUserAns());
	}, [isFocus]);
	return (
		<MainBackground>
			<HomeHeader title="Giải đố" />
			<Column
				mx={6}
				flex={1}
			>
				<CardList
					data={quiz}
					isQuizz
				/>
			</Column>
		</MainBackground>
	);
};

export default Quizz;

const styles = StyleSheet.create({});
