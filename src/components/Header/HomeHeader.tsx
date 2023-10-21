import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Center, Column, Heading, Row } from "native-base";
import { STYLES, colors } from "../../constansts/style";

export interface HomeHeaderProps {
	title: string;
}

const HomeHeader = (props: HomeHeaderProps) => {
	return (
		<Column
			bgColor={colors.blurBackground}
			safeAreaY
			pt={2}
			pb={2}
			mb={6}
		>
			<Center>
				<Heading
					color={"#fff"}
					fontSize={24}
					bold
					textTransform={'uppercase'}
					shadow={2}
				>
					{props.title}
				</Heading>
			</Center>
		</Column>
	);
};

export default HomeHeader;

const styles = StyleSheet.create({});
