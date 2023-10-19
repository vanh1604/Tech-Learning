import { quizz, quizzes } from "./../constansts/items";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { QuizzItemProps } from "../components/Quizz/QuizzItem";

type LoadingState = {
	isLoading: boolean;
};

const initialState = quizzes;

const loadingSlice = createSlice({
	name: "answer",
	initialState,
	reducers: {
		setUserChoice: (state: typeof quizzes, action: PayloadAction<QuizzItemProps>) => {
			// console.log(action.payload.order);
			state[action.payload.order || 0].userAns = action.payload.answer;
			//update data in firestore
		},
		setQuizData: (state: typeof quizzes, action: PayloadAction<typeof quizzes>) => action.payload,

		clearUserAns: (state: typeof quizzes) => {
			const newState = state.map((item, index) => {
				const newItem = { ...item, userAns: "" };
				state[index] = newItem;
				return newItem;
			});
			return newState;
		},
	},
});

export const setUserChoice = loadingSlice.actions.setUserChoice;
export const answerReducer = loadingSlice.reducer;
export const setQuizData = loadingSlice.actions.setQuizData;
export const clearUserAns = loadingSlice.actions.clearUserAns;
