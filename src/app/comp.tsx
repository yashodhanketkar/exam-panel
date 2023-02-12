"use client";

import styles from "@/styles/page.module.css";
import { useContext } from "react";
import AppContext from "./appContext";
import { SampleQuestionType } from "./data/sampleData";

interface displayQuestions extends SampleQuestionType {
  selectAnswer: (e: any) => void;
  response: any[];
}

interface compProp {
  questions: SampleQuestionType[];
  selectAnswer: (e: any) => void;
  response: any[];
}

function DisplayQuestions(props: displayQuestions) {
  const { currentQuestion } = useContext(AppContext);
  const { instruction, question, options, number, selectAnswer, response } =
    props;

  let handleClass = (option: any): string => {
    let selected = response[currentQuestion.questionNumber].response;
    return option === parseInt(selected) - 1
      ? "answerButton active"
      : "answerButton";
  };

  return (
    <>
      <div className={`${styles.serial} ${styles.contentHeaderRow}`}>
        Q No. {number}
      </div>
      <div className={`${styles.option} ${styles.contentHeaderRow}`}>
        View in:
        <select>
          <option>English</option>
        </select>
      </div>
      <div className={styles.instructionHeader}>
        <h5>QUESTION INSTRUCTION</h5>
      </div>
      <div className={styles.instruction}>{instruction}</div>
      <div className={styles.questionHeader}>
        <h5>QUESTION</h5>
      </div>
      <div className={styles.question}>
        <div className="questions-statement">{question}</div>
        <div>
          {options.map((option: any, i: number) => (
            <button
              className={handleClass(i)}
              key={i}
              defaultValue={""}
              name={number.toString()}
              value={i + 1}
              onClick={(e) => selectAnswer(e)}
            >
              ({i}) {option}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default function Comp(props: compProp) {
  const { questions, selectAnswer, response } = props;
  const value = useContext(AppContext);
  const clientSectionState: string = value.section;

  return (
    <>
      {questions &&
        questions
          .filter((que: any) =>
            clientSectionState === "all"
              ? que
              : que.section === clientSectionState
          )
          .filter((que: any) => que.number === value.pageNumber)
          .map((ques: any, i: number) => (
            <DisplayQuestions
              key={i}
              selectAnswer={selectAnswer}
              response={response}
              {...ques}
            />
          ))}
    </>
  );
}
