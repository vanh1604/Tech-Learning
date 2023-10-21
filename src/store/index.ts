import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { errorReducer } from "./error.reducer";
import { loadingReducer } from "./loading.reducer";
import { quizzReducer } from "./quiz.reducer";

const store = configureStore({
	reducer: {
		error: errorReducer,
		loading: loadingReducer,
		quiz: quizzReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
