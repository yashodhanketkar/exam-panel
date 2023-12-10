import { SampleQuestion } from "@/constants/sampleData";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export type Section = "all" | "physics" | "chemistry" | "maths";

export type SectionState = {
  value: Section;
  page: number;
  min: number;
  max: number;
};

const initialState: SectionState = {
  value: "all",
  page: 0,
  min: 0,
  max: SampleQuestion.length - 1,
};

export const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {
    select: (state, action: PayloadAction<Section>) => {
      state.value = action.payload;

      if (action.payload === "all") {
        state.min = 0;
        state.max = SampleQuestion.length;
      } else {
        const currSample = SampleQuestion.filter(
          (ele) => ele.section === action.payload
        );
        state.min = SampleQuestion.findIndex(
          (ele) => ele.number === currSample.at(0)?.number
        );
        state.max = SampleQuestion.findIndex(
          (ele) => ele.number === currSample.at(-1)?.number
        );

        if (state.page < state.min || state.page > state.max) {
          state.page = state.min;
        }
      }
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    pageUp: (state) => {
      if (state.page >= state.max) return;
      state.page = state.page + 1;
    },
    pageDown: (state) => {
      if (state.page - 1 < state.min) return;
      state.page = state.page - 1;
    },
  },
});

export const { select, pageDown, pageUp, setPage } = sectionSlice.actions;
export const reducer = sectionSlice.reducer;
