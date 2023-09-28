import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React, { useState } from "react";
import { Box, Row } from "native-base";
import { Text } from "native-base";
import { colors } from "../../constansts/style";
import { color } from "native-base/lib/typescript/theme/styled-system";
import BackgroundLayout from "../BackgroundLayout";

export interface QuizzItemProps extends TouchableOpacityProps {
	title: string;
	answer: string;
	isRightAnswer?: boolean;
	isUserChoice?: boolean;
	order?: number;
}

const Answer = ({ textColor, answer, title }: any) => {
	return (
		<Row>
			<Text
				bold
				mr={2}
				color={textColor}
			>
				{answer}.{" "}
			</Text>
			<Text color={textColor}>{title}</Text>
		</Row>
	);
};

const QuizzItem = (props: QuizzItemProps) => {
	const textColor = props.isUserChoice ? "#fff" : "#000";
	return (
		<TouchableOpacity
			style={[
				{
					marginBottom: 16,
				},
			]}
			{...props}
		>
			{props.isUserChoice ? (
				<BackgroundLayout style={[styles.answerBox]}>
					<Answer
						{...props}
						textColor={textColor}
					/>
				</BackgroundLayout>
			) : (
				<Box style={styles.answerBox}>
					<Answer
						{...props}
						textColor={textColor}
					/>
				</Box>
			)}
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
