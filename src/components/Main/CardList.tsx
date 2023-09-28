import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "native-base";
import CardItem, { CardProps } from "./CardItem";

export interface CardListProps {
	data: CardProps[];
	isQuizz?: boolean;
}

const CardList = (props: CardListProps) => {
	return (
		<FlatList
			data={props.data}
			renderItem={({ item }) => (
				<CardItem
					{...item}
					{...props}
				/>
			)}
			keyExtractor={(item, index) => index.toString()}
		/>
	);
};

export default CardList;

const styles = StyleSheet.create({});
