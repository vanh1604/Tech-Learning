import { StyleSheet } from "react-native";
import React from "react";
import { Column } from "native-base";
import CardList from "../components/Main/CardList";
import MainBackground from "../components/HomeTab/MainBackground";
import HomeHeader from "../components/Header/HomeHeader";
import { lessons } from "../constansts/items";

const Lesson = () => {
	return (
		<MainBackground>
			<HomeHeader title="Bài học" />
			<Column mx={6}>
				<CardList data={lessons} />
			</Column>
		</MainBackground>
	);
};

export default Lesson;

const styles = StyleSheet.create({});
