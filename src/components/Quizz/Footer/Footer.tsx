import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Row } from "native-base";
import FooterLeft, { FooterType } from "./FooterLeft";
import FooterRight from "./FooterRight";

export interface FooterProps {
	isFirst?: boolean;
	isLast?: boolean;
	footerLeftOptions?: FooterType;
	footerRightOptions?: FooterType;
}

const Footer = (props: FooterProps) => {
	return (
		<Row justifyContent={"space-between"}>
			<FooterLeft
				isArrow={!props.isFirst}
				{...props.footerLeftOptions}
			/>
			<FooterRight
				isArrow={!props.isLast}
				{...props.footerRightOptions}
			/>
		</Row>
	);
};

export default Footer;

const styles = StyleSheet.create({});
