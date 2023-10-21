import React, { useState, useEffect } from "react";
import { PicturePuzzle, PuzzlePieces } from "react-native-picture-puzzle";
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { Box, Center, Image, Row, Text, useTheme } from "native-base";
import ComponentHeader from "../components/Header/ComponentHeader";
import { samples_puzzle } from "../components/Sample_puzzle";
import NotificationBox from "../components/NotificationBox";
import BackgroundLayout from "../components/BackgroundLayout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../navigations/config";
import { games } from "../constansts/items";

type Props = {} & NativeStackScreenProps<RootStackParams, "Puzzle">;

export default function Puzzle(props: Props) {
	const { navigation, route } = props;
	const { id } = route.params;
	const gameData = games[Number(id)];
	const [showModal, setShowModal] = useState(false);
	const [hidden, setHidden] = useState<number | null>(0); // piece to obscure
	const [pieces, setPieces] = React.useState<PuzzlePieces>([0, 1, 2, 3, 4, 5, 6, 7, 8]);
	const { colors } = useTheme();

	const toggleNoti = () => {
		setShowModal((prevState) => !prevState);
	};
	const source = React.useMemo(() => gameData.avata, []);
	const renderLoading = React.useCallback((): JSX.Element => <ActivityIndicator />, []);
	const onChange = React.useCallback(
		(nextPieces: PuzzlePieces, nextHidden: number | null): void => {
			setPieces(nextPieces);
			setHidden(nextHidden);
			if (nextPieces === ([0, 1, 2, 3, 4, 5, 6, 7, 8] as PuzzlePieces)) {
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
			<ComponentHeader title={gameData.title} />
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
							style={{
								flex: 1,
								borderRadius: 8,
								paddingHorizontal: 12,
								paddingVertical: 8,
								borderWidth: 1,
								borderColor: colors.gradient.color1,
								marginRight: 8,
							}}
							onPress={navigation.goBack}
						>
							<Center>
								<Text>HỦY</Text>
							</Center>
						</TouchableOpacity>
						<BackgroundLayout
							style={{
								flex: 1,
								borderRadius: 8,
								paddingHorizontal: 12,
								paddingVertical: 8,
							}}
						>
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
					alt="Đáp án"
					w={200}
					h={200}
					source={source}
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
