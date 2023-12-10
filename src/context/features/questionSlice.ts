import type {
  QuestionStatus,
  SampleQuestionType,
} from "@/constants/sampleData";
import { SampleQuestion } from "@/constants/sampleData";
import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type SolvePayload = {
  number: number;
  selected?: number;
  status: QuestionStatus;
};

export type QuestionState = {
  value: SampleQuestionType[];
};

const initialState: QuestionState = {
  value: SampleQuestion,
};

export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    solve: (state, action: PayloadAction<SolvePayload>) => {
      const curr = state.value.find(
        (ele) => ele.number === action.payload.number
      );
      if (!curr) return;
      state.value = state.value.map((ele) => {
        if (ele.number === action.payload.number) {
          return {
            ...curr,
            status: action.payload.status,
            selected: ["reviewed"].includes(action.payload.status)
              ? ele.selected
              : action.payload.selected,
          };
        } else return ele;
      });
    },
  },
});

export const { solve } = questionSlice.actions;
export const reducer = questionSlice.reducer;
