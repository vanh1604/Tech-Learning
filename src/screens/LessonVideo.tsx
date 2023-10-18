import { StyleSheet, View } from "react-native";
import { Video, ResizeMode } from "expo-av";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { windowHeight, windowWidth } from "../constansts/style";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";
import YoutubePlayer from "react-native-youtube-iframe";
import { formatYoutubeLink } from "../constansts/functions";

const LessonVideo = () => {
	const route = useRoute<any>();
	const [lessons, setLessons] = useState<any>();
	useEffect(() => {
		const getData = async () => {
			const docRef = doc(firestore, "lesson", route.params.id);
			const lesson = (await getDoc(docRef)).data();
			setLessons(lesson);
		};
		getData();
	}, []);
	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<YoutubePlayer
				videoId={formatYoutubeLink(lessons?.videoSource || "")}
				// width={windowWidth}
				// height={windowWidth * 0.75}
				width={windowHeight}
				height={windowWidth}
				// prevent aspect ratio auto sizing
			/>
		</View>
	);
};

export default LessonVideo;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#000",
		transform: "rotate(90deg)",
	},
	buttons: {
		width: 100,
		height: 50,
	},
	video: {
		width: windowHeight,
		height: windowWidth,
	},
});
