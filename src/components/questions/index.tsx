"use client";

import { solve } from "@/context/features/questionSlice";
import type { RootState } from "@/context/store";
import { useDispatch, useSelector } from "react-redux";
import type { SampleQuestionType } from "../../constants/sampleData";

const DisplayQuestions = ({
  instruction,
  question,
  options,
  number,
  selected,
}: SampleQuestionType) => {
  const dispatch = useDispatch();
  return (
    <div className="grid md:grid-cols-2 shadow shadow-black/25 mb-auto mx-2 rounded-b-md">
      <div className="bg-blue-500 p-2 rounded-t-md md:rounded-tr-none md:rounded-s-md text-white">
        Q No. {number}
      </div>
      <div className="bg-blue-500 p-2 md:rounded-e-md text-white justify-end inline-flex gap-1">
        View in:
        <select className="text-black rounded-md px-1">
          <option>English</option>
        </select>
      </div>
      <p className="p-2 font-semibold border-b border-black/25 border-r">
        QUESTION INSTRUCTION
      </p>
      <p className="p-2 font-semibold border-b border-black/25">QUESTION</p>
      <div className="p-2 border-black/25 border-r">{instruction}</div>
      <div className="p-2">
        <div className="border-b border-black/25 py-2">{question}</div>
        <div>
          {options.map((option: any, i: number) => (
            <button
              key={i}
              className={`py-2 border-b border-black/25 last:border-b-0 w-full text-start ${
                selected === i && "bg-blue-200"
              }`}
              onClick={() =>
                dispatch(
                  solve({
                    number: number,
                    selected: i,
                    status: "answered",
                  })
                )
              }
            >
              ({i + 1}) {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Questions = () => {
  const questions = useSelector((state: RootState) => state.question.value);
  const { page, value } = useSelector((state: RootState) => state.section);

  return (
    <>
      {questions &&
        questions
          .filter((que: any) => (value === "all" ? que : que.section === value))
          .map(
            (ques: SampleQuestionType, i: number) =>
              ques.number === page + 1 && <DisplayQuestions key={i} {...ques} />
          )}
    </>
  );
};
