import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardItem from "../components/Main/CardItem";
import { colors } from "../constansts/style";

type Props = {};

const Home = (props: Props) => {
	return (
		<View style={{ backgroundColor: colors.primary, marginHorizontal: 24 }}>
			<CardItem
				navigateTo="Quiz"
				title="Xin lỗi, tôi là gấu trúc, tôi không hiểu tiếng người"
				avata={{ uri: "https://haycafe.vn/wp-content/uploads/2021/12/Hinh-anh-gau-truc-1.jpg" }}
				isQuizz
				isComplete
			/>
		</View>
	);
};

export default Home;

const styles = StyleSheet.create({});
