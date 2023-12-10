import { configureStore } from "@reduxjs/toolkit";
import { reducer as questionReducer } from "./features/questionSlice";
import { reducer as sectionReducer } from "./features/sectionSlice";

export const store = configureStore({
  reducer: {
    question: questionReducer,
    section: sectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
