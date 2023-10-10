import { StyleSheet } from "react-native";
import React from "react";
import MainBackground from "../components/HomeTab/MainBackground";
import HomeHeader from "../components/Header/HomeHeader";
import { Column } from "native-base";
import CardList from "../components/Main/CardList";
import { quizz } from "../constansts/items";

const Quizz = () => {
  return (
    <MainBackground>
      <HomeHeader title="Bài học" />
      <Column mx={6}>
        <CardList data={quizz} isQuizz />
      </Column>
    </MainBackground>
  );
};

export default Quizz;

const styles = StyleSheet.create({});
