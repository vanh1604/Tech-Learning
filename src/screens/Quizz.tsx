import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import MainBackground from "../components/HomeTab/MainBackground";
import HomeHeader from "../components/Header/HomeHeader";
import { Column } from "native-base";
import CardList from "../components/Main/CardList";
import { createQuiz, createQuizScreenOnFirestore } from "../constansts/items";
import { CardProps } from "../components/Main/CardItem";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";

const Quizz = () => {
	const [quizz, setQuizz] = useState<CardProps[]>([]);
	useEffect(() => {
		const handleGetInfo = async () => {
			try {
				const quizRef = doc(firestore, "cards", "quiz");
				const docSnap = await getDoc(quizRef);
				if (docSnap.exists()) {
					const objSession: any = docSnap.data();
					setQuizz(objSession.data);
				}
			} catch (err) {
				console.log(err);
			}
		};
		handleGetInfo();
	}, []);
	return (
		<MainBackground>
			<HomeHeader title="Bài học" />
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
