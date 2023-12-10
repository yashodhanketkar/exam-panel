"use client";

import { SampleQuestionType } from "@/constants/sampleData";
import { setPage } from "@/context/features/sectionSlice";
import type { RootState } from "@/context/store";
import { useDispatch, useSelector } from "react-redux";

const getColor = (question: SampleQuestionType) => {
  let color = "";
  switch (question.status) {
    case "answered":
      color = "bg-green-700";
      break;
    case "notVisited":
      color = "bg-gray-400";
      break;
    case "dumped":
      color = "bg-white";
      break;
    case "reviewed":
      color = "bg-fuchsia-700";
      break;
    case "unsolved":
      color = "bg-red-500";
      break;
    default:
      break;
  }

  return color;
};

export default function Pallet() {
  const dispatch = useDispatch();
  const question = useSelector((state: RootState) => state.question.value);

  return (
    <div className="bg-blue-200 flex flex-col gap-1 mb-auto">
      <p className="bg-blue-500 text-white font-semibold p-1 rounded-t-md w-full">
        Question pallet
      </p>
      <div className="gap-1 bg-white grid-cols-3 sm:grid-cols-5 md:grid-cols-2 lg:grid-cols-5 grid">
        {question.map((q, i) => (
          <button
            onClick={() => dispatch(setPage(i))}
            value={i}
            className={getColor(q)}
            key={i}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
