import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TimerState = {
  timestamp: number | null;
};

const initialState: TimerState = {
  timestamp: Date.now() + 1000 * 60 * 30,
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    setGlobalTimer: (state, action: PayloadAction<number>) => {
      state.timestamp = action.payload;
    },
    clearGlobalTimer: (state) => {
      state.timestamp = null;
    },
  },
});

export const { setGlobalTimer, clearGlobalTimer } = timerSlice.actions;
export const reducer = timerSlice.reducer;
