import { Dimensions, StyleSheet } from "react-native";

export const windowWidth = Dimensions.get("window").width;
export const windowHeight = Dimensions.get("window").height;

export const colors = {
	primary: "#66DCFB",
	boldedGrey: "#F3F4F6",
	lightGrey: "#D4D4D4",
	blurBackground: "rgba(255, 255, 255,0.36)",
};

export const STYLES = StyleSheet.create({
	title: {
		fontSize: 16,
		color: colors.primary,
		fontWeight: "bold",
	},
	primaryButton: {
		backgroundColor: colors.primary,
	},
	headerTitle: {
		color: "#fff",
		lineHeight: 24,
		textShadowColor: "rgba(0, 0, 0, 0.50)", // Màu shadow
		textShadowOffset: { width: 1, height: 1 }, // Độ dài và chiều cao của shadow
		textShadowRadius: 2, // Bán kính của shadow
	},
});
