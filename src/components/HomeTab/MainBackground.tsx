import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { Box } from "native-base";

const MainBackground = (props: PropsWithChildren) => {
	return (
		<ImageBackground
			source={require("../../../assets/image/background/main_background.png")}
			blurRadius={4}
			style={{ flex: 1 }}
		>
			{props.children}
		</ImageBackground>
	);
};

export default MainBackground;

const styles = StyleSheet.create({});
