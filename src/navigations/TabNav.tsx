import Home from "../screens/Home";
import { StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { BottomTabsParams } from "./config";
import { getColor, useTheme } from "native-base";
import Lesson from "../screens/Lesson";
import GameScreen from "../screens/GameScreen";
import Quizz from "../screens/Quizz";
import { Cup } from "iconsax-react-native";
import Game from "iconsax-react-native";
import LinearGradient from "react-native-linear-gradient";
const Tab = createBottomTabNavigator<BottomTabsParams>();

const TabNav = () => {
	const { colors } = useTheme();
	const navigation = useNavigation<any>();
	return (
		<Tab.Navigator
			screenOptions={{
				headerShown: false,
				tabBarInactiveTintColor: colors.gradient.color1,
				tabBarActiveTintColor: colors.gradient.color2,
				tabBarShowLabel: false,
			}}
		>
			<Tab.Screen
				name="Lesson"
				component={Lesson}
				options={{
					tabBarIcon: ({ color, size }: any) => (
						<FontAwesome
							name="home"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Game"
				component={GameScreen}
				options={{
					tabBarIcon: ({ color, size }: any) => (
						<Ionicons
							name="game-controller"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="Quiz"
				component={Quizz}
				options={{
					tabBarIcon: ({ color, size }: any) => (
						<Cup
							size={size}
							color={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
};

export default TabNav;

const styles = StyleSheet.create({});
