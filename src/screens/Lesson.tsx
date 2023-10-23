import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Box, Column, ScrollView } from "native-base";
import CardList from "../components/Main/CardList";
import MainBackground from "../components/HomeTab/MainBackground";
import HomeHeader from "../components/Header/HomeHeader";
import { createLessons, lessons } from "../constansts/items";

const Lesson = () => {
	return (
		<ScrollView>
			<MainBackground>
				<Box
					position={"fixed"}
					top={0}
				>
					<HomeHeader title="Bài học" />
				</Box>
				<Column mx={6}>
					<CardList data={lessons} />
				</Column>
			</MainBackground>
		</ScrollView>
	);
};

export default Lesson;

const styles = StyleSheet.create({});
