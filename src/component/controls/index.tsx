"use client";
import AppContext from "@/app/appContext";
import styles from "@/styles/components.module.css";
import { useContext } from "react";

interface controlsProps {
  setPageNumber: (pageNumber: number) => void;
  setCurrentQuestion: ({
    questionNumber,
    questionStatus,
  }: {
    questionNumber: number;
    questionStatus: string;
  }) => void;
  selectStatus: (status: string) => void;
  clearResponse: () => void;
}

export default function Controls(props: controlsProps) {
  const { pageNumber, currentQuestion, pageStart, pageEnd } =
    useContext(AppContext);
  const { setPageNumber, setCurrentQuestion, selectStatus, clearResponse } =
    props;

  let handleOnNext = () => {
    if (pageEnd == pageNumber) return;
    setPageNumber(pageNumber + 1);
    setCurrentQuestion({
      ...currentQuestion,
      questionNumber: currentQuestion.questionNumber + 1,
    });
  };

  let handleOnPrev = () => {
    if (pageStart == pageNumber) return;
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
