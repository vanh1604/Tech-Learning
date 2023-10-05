import { StyleSheet, View } from "react-native";
import { Video, ResizeMode } from "expo-av";
import React, { useLayoutEffect, useState } from "react";
import { windowHeight, windowWidth } from "../constansts/style";
import { useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase";

const LessonVideo = () => {
	const video = React.useRef<any>(null);
	const [status, setStatus] = React.useState<any>({});
	const route = useRoute<any>();
	const [lessons, setLessons] = useState<any>();
	useLayoutEffect(() => {
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
			<Video
				ref={video}
				style={styles.video}
				source={lessons?.videoSource}
				useNativeControls
				resizeMode={ResizeMode.CONTAIN}
				onPlaybackStatusUpdate={(status) => setStatus(() => status)}
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
