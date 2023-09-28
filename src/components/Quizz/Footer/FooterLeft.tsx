import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import React from "react";
import { Box, IconButton } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { STYLES } from "../../../constansts/style";
import BackgroundLayout from "../../BackgroundLayout";

export interface FooterType extends TouchableOpacityProps {
	isArrow?: boolean;
	endProgressTitle?: string;
}

const FooterLeft = ({ isArrow, ...props }: FooterType) => {
	return (
		<TouchableOpacity
			{...props}
			style={[
				{
					paddingVertical: isArrow ? 10 : 0,
					paddingHorizontal: isArrow ? 12 : 0,
					borderRadius: 100,
					height: isArrow ? 48 : 0,
					justifyContent: "center",
					alignItems: "center",
				},
			]}
		>
			{isArrow && (
				<BackgroundLayout style={{ width: 48, height: 48, borderRadius: 99999, justifyContent: "center", alignItems: "center" }}>
					<AntDesign
						name="arrowleft"
						size={24}
						color="#fff"
					/>
				</BackgroundLayout>
			)}
		</TouchableOpacity>
	);
};

export default FooterLeft;

const styles = StyleSheet.create({});
