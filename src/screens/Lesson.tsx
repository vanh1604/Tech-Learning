import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Column } from "native-base";
import Header1 from "../components/Header1";
import CardList from "../components/Main/CardList";
import MainBackground from "../components/HomeTab/MainBackground";
import HomeHeader from "../components/Header/HomeHeader";
import { CardProps } from "../components/Main/CardItem";
import { createLessons, lessons } from "../constansts/items";
import { collection, doc, getCountFromServer, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";

const Lesson = () => {
	useEffect(() => {
		createLessons();
	}, []);
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
