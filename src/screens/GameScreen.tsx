import { StyleSheet } from "react-native";
import React from "react";
import { Column, FlatList } from "native-base";
import HomeHeader from "../components/Header/HomeHeader";
import MainBackground from "../components/HomeTab/MainBackground";
import CardList from "../components/Main/CardList";
import { games } from "../constansts/items";

const GameScreen = () => {
	return (
		<Column flex={1}>
			<MainBackground>
				<HomeHeader title="Trò chơi" />
				<CardList data={games} />
			</MainBackground>
		</Column>
	);
};

export default GameScreen;

const styles = StyleSheet.create({});
