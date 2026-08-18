import { configureStore } from "@reduxjs/toolkit";
import { reducer as questionReducer } from "./features/questionSlice";
import { reducer as sectionReducer } from "./features/sectionSlice";
import { reducer as timerReducer } from "./features/timerSlice";

export const store = configureStore({
  reducer: {
    question: questionReducer,
    section: sectionReducer,
    timer: timerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
