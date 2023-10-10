import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import MainBackground from "../components/HomeTab/MainBackground";
import HomeHeader from "../components/Header/HomeHeader";
import { Column } from "native-base";
import CardList from "../components/Main/CardList";
import { quizz } from "../constansts/items";
import { useDispatch } from "react-redux";
import { clearUserAns } from "../store/answer.reducer";
import { useAppDispatch } from "../store";

const Quizz = () => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(clearUserAns());
	});
	return (
		<MainBackground>
			<HomeHeader title="Giải đố" />
			<Column mx={6}>
				<CardList
					data={quizz}
					isQuizz
				/>
			</Column>
		</MainBackground>
	);
};

export default Quizz;

const styles = StyleSheet.create({});
