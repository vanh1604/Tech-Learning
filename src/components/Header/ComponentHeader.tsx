import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Row } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { HomeHeaderProps } from "./HomeHeader";
import { useNavigation } from "@react-navigation/native";
import { Box } from "native-base";

const ComponentHeader = (props: HomeHeaderProps) => {
	const navigation = useNavigation();
	return (
		<Row
			justifyContent={"space-between"}
			safeAreaTop
			p={2}
		>
			<TouchableOpacity onPress={navigation.goBack}>
				<AntDesign
					name="left"
					size={24}
					color="#000"
				/>
			</TouchableOpacity>
			<Text style={styles.text}>{props.title}</Text>
			<Box w={6}></Box>
		</Row>
	);
};

export default ComponentHeader;

const styles = StyleSheet.create({
	text: {
		fontSize: 16,
		fontWeight: "700",
		color: "#1F2937",
	},
});
