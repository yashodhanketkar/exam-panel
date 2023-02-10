"use client";

import styles from "@/styles/page.module.css";
import { useContext } from "react";
import AppContext from "./appContext";

function DisplayQuestions(props: any) {
  const { currentQuestion } = useContext(AppContext);
  const { instruction, question, options, number, selectAnswer, response } =
    props;

  let handleClass = (option: any) => {
    let selected = response[currentQuestion.questionNumber].response;
    return option === parseInt(selected) - 1
      ? "answerButton active"
      : "answerButton";
  };

  return (
    <>
      <div className={`row ${styles.contentHeaderRow}`}>
        <p className={styles.serial}>Q No. {number}</p>
        <p className={styles.options}>
          View in:
          <select>
            <option>English</option>
          </select>
        </p>
      </div>
      <div className="row">
        <h5 className="col">QUESTION INSTRUCTION</h5>
        <h5 className="col">QUESTION</h5>
      </div>
      <div className="row">
        <p className="col">{instruction}</p>
        <div className="col">
          {question}
          {options.map((option: any, i: number) => (
            <button
              className={handleClass(i)}
              key={i}
              defaultValue={""}
              name={number}
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

export default function Comp(props: any) {
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
