import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ErrorOverlay from "../components/ErrorOverlay";
import LoadingOverlay from "../components/LoadingOverlay";
import { RootStackParams } from "./config";
import Lesson from "../screens/Lesson";
import Quizz from "../screens/Quizz";
import GameScreen from "../screens/GameScreen";
import TabNav from "./TabNav";
import AnswerQuizz from "../screens/Quizz/AnswerQuizz";
import Puzzle from "../screens/Puzzle";

const Stack = createNativeStackNavigator<RootStackParams>();

const Root = () => {
  return (
    <>
      <LoadingOverlay />
      <ErrorOverlay />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="TabNav"
        >
          <Stack.Screen name="TabNav" component={TabNav} />
          <Stack.Screen name="Lesson" component={Lesson} />
          <Stack.Screen name="AnswerQuizz" component={AnswerQuizz} />
          <Stack.Screen name="Game" component={GameScreen} />
          <Stack.Screen name="Puzzle" component={Puzzle} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Root;

const styles = StyleSheet.create({});
