"use client";

import type { RootState } from "@/context/store";
import { useSelector } from "react-redux";
import { QuestionsSection } from "./display";
import { QuestionsHeader } from "./header";

export const Questions = () => {
  const questions = useSelector((state: RootState) => state.question.value);
  const { page } = useSelector((state: RootState) => state.section);

  if (!questions) return null;

  return (
    <div className="flex flex-col md:grid md:grid-cols-2 mb-auto border border-border rounded-md">
      <QuestionsHeader nos={page + 1} />
      <QuestionsSection questions={questions} />
    </div>
  );
};
