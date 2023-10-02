import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Video, ResizeMode, VideoProps } from "expo-av";
import React, { useEffect, useLayoutEffect } from "react";
import { windowHeight, windowWidth } from "../constansts/style";
import { useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const LessonVideo = () => {
	const video = React.useRef<any>(null);
	const [status, setStatus] = React.useState<any>({});
	const route = useRoute<any>();
	return (
		<View style={styles.container}>
			<StatusBar hidden />
			<Video
				ref={video}
				style={styles.video}
				source={route.params.videoSource}
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
