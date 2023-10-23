import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { Image, Row } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ArrowCircleRight2 } from "iconsax-react-native";

export interface CardProps extends TouchableOpacityProps {
	title: string;
	isQuizz?: boolean;
	quizzes?: any[];
	avata?: any;
	isComplete?: boolean;
	navigateTo?: string;
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
					resizeMode="cover"
				/>
				<Text style={styles.cardTitle}>{props.title}</Text>
				<ArrowCircleRight2
					size="24"
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
						color="#16A34A"
					/>
				)}
				<ArrowCircleRight2
					size="24"
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
			onPress={() => navigation.navigate("AnswerQuizz", props.paramList)}
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
		// width: "100%",
		flex: 1,
		backgroundColor: "rgba(255, 255, 255,0.36)",
		borderWidth: 1,
		borderColor: "rgba(255, 255, 255,0.12)",
	},
	cardTitle: {
		width: "60%",
		color: "#fff",
		fontWeight: "500",
		lineHeight: 24,
		fontSize: 16,
		textShadowColor: "rgba(0, 0, 0, 0.50)", // Màu shadow
		textShadowOffset: { width: 1, height: 1 }, // Độ dài và chiều cao của shadow
		textShadowRadius: 2, // Bán kính của shadow
	},
});
