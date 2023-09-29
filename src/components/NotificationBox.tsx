import { StyleSheet, Touchable, TouchableOpacity } from "react-native";
import React from "react";
import { Center, Pressable, Stack, Text } from "native-base";
import { colors } from "../constansts/style";
import BackgroundLayout from "./BackgroundLayout";

export interface NotificationBoxProps {
	title: string;
	onConfirmHandler?: any;
	hasCancelButton?: boolean;
	onCancelHandler?: any;
	showModal?: boolean;
}

const NotificationBox = (props: NotificationBoxProps) => {
	const exitModalHandler = () => {
		props.onCancelHandler();
	};
	return (
		<Stack
			display={props.showModal ? "block" : "none"}
			position={"absolute"}
			top={0}
			bottom={0}
			right={0}
			left={0}
			bgColor={"rgba(0,0,0,0.2)"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<Center
				bgColor={"#fff"}
				w={"70%"}
				borderRadius={16}
				py={4}
			>
				<Text
					fontSize={16}
					color={colors.primary}
					bold
				>
					Xin chúc mừng
				</Text>
				<Text
					w={200}
					mb={3}
					textAlign={"center"}
					fontSize={12}
					lineHeight={18}
				>
					{props.title}
				</Text>
				<BackgroundLayout
					style={{
						width: "80%",
						paddingHorizontal: 12,
						paddingVertical: 8,
						borderRadius: 8,
					}}
				>
					<TouchableOpacity onPress={props.onConfirmHandler}>
						<Center>
							<Text
								fontSize={16}
								color={"#fff"}
								fontWeight={"500"}
							>
								Đồng ý
							</Text>
						</Center>
					</TouchableOpacity>
				</BackgroundLayout>
				{props.hasCancelButton && (
					<Pressable
						borderTopWidth={1}
						borderTopColor={colors.lightGrey}
						w={"100%"}
						px={3}
						py={2.5}
						onPress={exitModalHandler}
					>
						<Center>
							<Text
								fontSize={16}
								color={"#737373"}
							>
								Hủy
							</Text>
						</Center>
					</Pressable>
				)}
			</Center>
		</Stack>
	);
};

export default NotificationBox;

const styles = StyleSheet.create({});
