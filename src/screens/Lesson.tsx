import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Box, Column, ScrollView } from "native-base";
import CardList from "../components/Main/CardList";
import MainBackground from "../components/HomeTab/MainBackground";
import HomeHeader from "../components/Header/HomeHeader";
import { createLessons, lessons } from "../constansts/items";

const Lesson = () => {
	return (
		<MainBackground>
			<Box
				position={"fixed"}
				top={0}
			>
				<HomeHeader title="Bài học" />
			</Box>
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
