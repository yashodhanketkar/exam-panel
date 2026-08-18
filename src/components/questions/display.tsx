import { solve } from "@/context/features/questionSlice";
import { SampleQuestionType } from "@/constants/sampleData";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/context/store";

export const QuestionsSection = ({
  questions,
}: {
  questions: SampleQuestionType[];
}) => {
  const { page, value } = useSelector((state: RootState) => state.section);
  if (!questions || questions.length < 1) return null;

  return questions
    .filter((que: any) => (value === "all" ? que : que.section === value))
    .map(
      (ques: SampleQuestionType, i: number) =>
        ques.number === page + 1 && <DisplayQuestions key={i} {...ques} />,
    );
};

export const DisplayQuestions = ({
  instruction,
  question,
  options,
  number,
  selected,
}: SampleQuestionType) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="p-2 font-semibold border-b border-black/25 md:border-r">
        QUESTION INSTRUCTION
      </div>
      <p className="p-2 font-semibold border-b border-black/25">QUESTION</p>
      <div className="p-2 border-black/25 md:border-r">{instruction}</div>
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
                  }),
                )
              }
            >
              ({i + 1}) {option}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
