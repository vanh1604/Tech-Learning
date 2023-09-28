import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FooterType } from "./FooterLeft";
import { AntDesign } from "@expo/vector-icons";
import { STYLES } from "../../../constansts/style";

const FooterRight = ({ isArrow, ...props }: FooterType) => {
	const textColor = "#fff";
	return (
		<TouchableOpacity
			{...props}
			style={[
				STYLES.primaryButton,
				{
					paddingVertical: 10,
					paddingHorizontal: 12,
					borderRadius: 100,
					height: 48,
					justifyContent: "center",
					alignItems: "center",
				},
			]}
		>
			{isArrow ? (
				<AntDesign
					name="arrowright"
					size={24}
					color={textColor}
				/>
			) : (
				<Text style={{ color: textColor }}>{props.endProgressTitle}</Text>
			)}
		</TouchableOpacity>
	);
};

export default FooterRight;

const styles = StyleSheet.create({});
