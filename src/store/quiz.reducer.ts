import { quizz } from "./../constansts/items";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type QuizType = typeof quizz;
type QuizItemType = (typeof quizz)[0];

const initialState: any[] = quizz;

const quizSlice = createSlice({
	name: "quiz",
	initialState,
	reducers: {
		updateQuizItemsData: (state: QuizType, action: PayloadAction<{ index: number; data: QuizItemType }>) => {
			const { index, data } = action.payload;
			state[index] = data;
		},
		updateIsComplete: (state: QuizType, action: PayloadAction<{ index: number; rightAnsCount: number }>) => {
			const { index, rightAnsCount } = action.payload;
			state[index].isComplete = (state[index].quizzes?.length || 0) == rightAnsCount;
		},
	},
});

export const updateQuizItemsData = quizSlice.actions.updateQuizItemsData;
export const updateIsComplete = quizSlice.actions.updateIsComplete;
export const quizzReducer = quizSlice.reducer;
