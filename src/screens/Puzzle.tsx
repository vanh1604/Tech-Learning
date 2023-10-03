import React from "react";
import { PicturePuzzle, PuzzlePieces } from "react-native-picture-puzzle";
import { ActivityIndicator, StyleSheet } from "react-native";
import { Text, View } from "native-base";
import MainBackground from "../components/HomeTab/MainBackground";
import Header1 from "../components/Header1";
import ComponentHeader from "../components/Header/ComponentHeader";

export default function Puzzle() {
  const [hidden, setHidden] = React.useState<number | null>(0); // piece to obscure
  const [pieces, setPieces] = React.useState<PuzzlePieces>([
    0, 1, 2, 3, 4, 5, 6, 7, 8,
  ]);
  const source = React.useMemo(
    () => ({
      uri: "https://images.unsplash.com/photo-1696233803601-3988d2c06d97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
    }),
    []
  );
  const renderLoading = React.useCallback(
    (): JSX.Element => <ActivityIndicator />,
    []
  );
  const onChange = React.useCallback(
    (nextPieces: PuzzlePieces, nextHidden: number | null): void => {
      setPieces(nextPieces);
      setHidden(nextHidden);
    },
    [setPieces, setHidden]
  );
  return (
    <View>
      <ComponentHeader title="Game" />
      <Text textAlign={"center"} my={6}>
        Hoàn thành những mảnh ghép sau
      </Text>
      <View style={styles.content}>
        <PicturePuzzle
          size={500}
          pieces={pieces}
          hidden={hidden}
          onChange={onChange}
          source={source}
          renderLoading={renderLoading}
        />
      </View>
      <Text padding={5} textAlign={"center"}>
        Lorem ipsum dolor sit amet consectetur. Eget congue aenean massa enim
        dictum imperdiet.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    justifyContent: "center",
    alignContent: "center",
  },
});
