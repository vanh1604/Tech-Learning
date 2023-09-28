import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Column } from "native-base";
import Header1 from "../components/Header1";
import CardList from "../components/Main/CardList";
import { lessons } from "../constansts/items";
import MainBackground from "../components/HomeTab/MainBackground";
import HomeHeader from "../components/Header/HomeHeader";

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
