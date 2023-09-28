import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../constansts/items";
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
		},
	},
});

export const setUserChoice = loadingSlice.actions.setUserChoice;
export const answerReducer = loadingSlice.reducer;
