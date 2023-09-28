import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React from "react";
import { Image, Row } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export interface CardProps extends TouchableOpacityProps {
	title: string;
	isQuizz?: boolean;
	avata?: any;
	isComplete?: boolean;
	navigateTo: string;
	paramList?: any;
}

const MainItem = (props: CardProps) => {
	return (
		<TouchableOpacity
			{...props}
			style={styles.card}
		>
			<Row
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				<Image
					source={props.avata}
					w={20}
					h={20}
					borderRadius={16}
					alt="avata"
				/>
				<Text style={styles.cardTitle}>{props.title}</Text>
				<AntDesign
					name="arrowright"
					size={24}
					color="#fff"
				/>
			</Row>
		</TouchableOpacity>
	);
};

const QuizzCard = (props: CardProps) => {
	return (
		<TouchableOpacity
			{...props}
			style={styles.card}
		>
			<Row
				alignItems={"center"}
				justifyContent={"space-between"}
			>
				<Text style={styles.cardTitle}>{props.title}</Text>
				{props.isComplete && (
					<AntDesign
						name="checkcircle"
						size={24}
						color="black"
					/>
				)}
				<AntDesign
					name="arrowright"
					size={24}
					color="#fff"
				/>
			</Row>
		</TouchableOpacity>
	);
};

const CardItem = (props: CardProps) => {
	const navigation = useNavigation<any>();
	return props.isQuizz ? (
		<QuizzCard
			{...props}
			onPress={() => navigation.navigate(props.navigateTo, props.paramList)}
		/>
	) : (
		<MainItem
			{...props}
			onPress={() => navigation.navigate(props.navigateTo, props.paramList)}
		/>
	);
};

export default CardItem;

const styles = StyleSheet.create({
	card: {
		padding: 8,
		marginBottom: 16,
		borderRadius: 16,
		width: "100%",
		backgroundColor: "rgba(255, 255, 255, 0.12);",
	},
	cardTitle: {
		width: "60%",
		color: "#fff",
		fontWeight: "500",
		lineHeight: 24,
		fontSize: 16,
	},
});
