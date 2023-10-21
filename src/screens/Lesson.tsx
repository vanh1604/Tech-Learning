import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { Column } from "native-base";
import CardList from "../components/Main/CardList";
import MainBackground from "../components/HomeTab/MainBackground";
import HomeHeader from "../components/Header/HomeHeader";
import { createLessons, lessons } from "../constansts/items";

const Lesson = () => {
	useEffect(() => {
		createLessons();
	}, []);
	return (
		<MainBackground>
			<HomeHeader title="Bài học" />
			<Column
				mx={6}
				flex={1}
			>
				<CardList data={lessons} />
			</Column>
		</MainBackground>
	);
};

export default Lesson;

const styles = StyleSheet.create({});
