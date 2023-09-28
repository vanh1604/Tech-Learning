import { StyleSheet } from "react-native";
import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Box, useTheme } from "native-base";
export interface Props {
	children: ReactNode;
	style?: any;
}
const BackgroundLayout = (props: Props) => {
	const { children } = props;
	const { colors } = useTheme();
	return (
		<LinearGradient
			style={props.style}
			colors={[colors.gradient.color1, colors.gradient.color2]}
		>
			{children}
		</LinearGradient>
	);
};

export default BackgroundLayout;

const styles = StyleSheet.create({});
