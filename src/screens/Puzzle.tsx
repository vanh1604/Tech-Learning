import React, { useState, useEffect } from "react";
import { PicturePuzzle, PuzzlePieces } from "react-native-picture-puzzle";
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { Box, Center, Image, Row, Text, View, useTheme } from "native-base";
import ComponentHeader from "../components/Header/ComponentHeader";
import { samples_puzzle } from "../components/Sample_puzzle";
import NotificationBox from "../components/NotificationBox";
import { useNavigation } from "@react-navigation/native";
import BackgroundLayout from "../components/BackgroundLayout";
import { colors } from "../constansts/style";

export default function Puzzle() {
	const navigation = useNavigation<any>();
	const [showModal, setShowModal] = useState(false);
	const [hidden, setHidden] = useState<number | null>(0); // piece to obscure
	const [pieces, setPieces] = React.useState<PuzzlePieces>([0, 1, 2, 3, 4, 5, 6, 7, 8]);
	const { colors } = useTheme();

	const toggleNoti = () => {
		setShowModal((prevState) => !prevState);
	};
	const source = React.useMemo(
		() => ({
			uri: "https://plus.unsplash.com/premium_photo-1695054405302-82ce0cda5111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1872&q=80",
		}),
		[]
	);
	const renderLoading = React.useCallback((): JSX.Element => <ActivityIndicator />, []);
	const onChange = React.useCallback(
		(nextPieces: PuzzlePieces, nextHidden: number | null): void => {
			setPieces(nextPieces);
			setHidden(nextHidden);
			if (nextPieces !== ([0, 1, 2, 3, 4, 5, 6, 7, 8] as PuzzlePieces)) {
				toggleNoti();
			}
		},
		[setPieces, setHidden]
	);
	useEffect(() => {
		setPieces(samples_puzzle[Math.floor(Math.random() * samples_puzzle.length)]);
	}, []);

	return (
		<Box flex={1}>
			<ComponentHeader title="Game" />
			<Text
				textAlign={"center"}
				my={6}
			>
				Hoàn thành những mảnh ghép sau
			</Text>
			<Box alignItems={"center"}>
				<PicturePuzzle
					size={300}
					pieces={pieces}
					hidden={hidden}
					onChange={onChange}
					source={source}
					renderLoading={renderLoading}
				/>
			</Box>
			<Text
				padding={5}
				textAlign={"center"}
			>
				Lorem ipsum dolor sit amet consectetur. Eget congue aenean massa enim dictum imperdiet.
			</Text>
			<NotificationBox
				content="Chúc mừng bạn đã hoàn thành trò chơi. Nhấn TIẾP TỤC để sang ảnh mới"
				title="Xin chúc mừng!"
				showModal={showModal}
				BottomBox={() => (
					<Row w={"80%"}>
						<TouchableOpacity
							style={{ flex: 1, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, borderWidth: 1, borderColor: colors.gradient.color1, marginRight: 8 }}
							onPress={navigation.goBack}
						>
							<Center>
								<Text>HỦY</Text>
							</Center>
						</TouchableOpacity>
						<BackgroundLayout style={{ flex: 1, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8 }}>
							<TouchableOpacity style={{ width: "100%", borderRadius: 8 }}>
								<Center>
									<Text color={"#fff"}>TIẾP TỤC</Text>
								</Center>
							</TouchableOpacity>
						</BackgroundLayout>
					</Row>
				)}
			/>
			<Box alignItems={"flex-end"}>
				<Image
					w={200}
					h={200}
					source={{
						uri: "https://plus.unsplash.com/premium_photo-1695054405302-82ce0cda5111?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1872&q=80",
					}}
				/>
			</Box>
		</Box>
	);
}

const styles = StyleSheet.create({
	content: {
		justifyContent: "center",
		alignContent: "center",
	},
});
