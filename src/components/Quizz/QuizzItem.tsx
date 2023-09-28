import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React, { useState } from "react";
import { Box, Row } from "native-base";
import { Text } from "native-base";
import { colors } from "../../constansts/style";
import { color } from "native-base/lib/typescript/theme/styled-system";

export interface QuizzItemProps extends TouchableOpacityProps {
	title: string;
	answer: string;
	isRightAnswer?: boolean;
	isUserChoice?: boolean;
	order?: number;
}

const QuizzItem = (props: QuizzItemProps) => {
	const textColor = props.isUserChoice ? "#fff" : "#000";
	return (
		<TouchableOpacity
			style={[
				styles.answerBox,
				{
					marginBottom: 16,
					backgroundColor: props.isUserChoice ? colors.primary : "#fff",
				},
			]}
			{...props}
		>
			<Row>
				<Text
					bold
					mr={2}
					color={textColor}
				>
					{props.answer}.{" "}
				</Text>
				<Text color={textColor}>{props.title}</Text>
			</Row>
		</TouchableOpacity>
	);
};

export default QuizzItem;

const styles = StyleSheet.create({
	answerBox: {
		borderWidth: 1,
		borderColor: colors.lightGrey,
		borderRadius: 100,
		paddingHorizontal: 24,
		paddingVertical: 10,
	},
});
