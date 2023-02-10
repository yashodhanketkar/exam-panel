"use client";
import AppContext from "@/app/appContext";
import styles from "@/styles/components.module.css";
import { useContext } from "react";

export default function Controls(props: any) {
  const { pageNumber, currentQuestion } = useContext(AppContext);
  const { setPageNumber, setCurrentQuestion, selectStatus, clearResponse } =
    props;

  let handleOnNext = () => {
    setPageNumber(pageNumber + 1);
    setCurrentQuestion({
      ...currentQuestion,
      questionNumber: currentQuestion.questionNumber + 1,
    });
  };

  let handleOnPrev = () => {
    setPageNumber(pageNumber - 1);
    setCurrentQuestion({
      ...currentQuestion,
      questionNumber: currentQuestion.questionNumber - 1,
    });
  };

  return (
    <>
      <button className={styles.controlButton} onClick={() => clearResponse()}>
        CLEAR RESPONSE
      </button>
      <button
        className={styles.controlButton}
        onClick={() => {
          selectStatus("reviewed");
        }}
      >
        REVIEW
      </button>
      <button
        className={styles.controlButton}
        onClick={() => selectStatus("dumped")}
      >
        DUMP
      </button>
      <button className={styles.controlButton} onClick={handleOnPrev}>
        PREVIOUS
      </button>
      <button className={styles.controlButton} onClick={handleOnNext}>
        NEXT
      </button>
    </>
  );
}
