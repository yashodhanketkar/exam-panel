"use client";

import AppContext, { defaultContext } from "./appContext";
import React, { useState, useEffect } from "react";
import styles from "@/styles/page.module.css";
import Side from "@/component/side";
import Nav from "@/component/section";
import Controls from "@/component/controls";
import Comp from "./comp";
import SampleQuestion, { defaultResponse, pageLimits } from "./data/sampleData";

export default function Home(): React.ReactElement {
  const [response, setResponse] = useState(defaultResponse);
  const [section, setSection] = useState(defaultContext.section);
  const [pageNumber, setPageNumber] = useState(defaultContext.pageNumber);
  const [pageStart, setPageStart] = useState(defaultContext.pageStart);
  const [pageEnd, setPageEnd] = useState(defaultContext.pageEnd);
  const [currentQuestion, setCurrentQuestion] = useState(
    defaultContext.currentQuestion
  );

  let selectAnswer = (e: any) => {
    const number = e.target.name;
    const answer = e.target.value;
    let Status;
    const currentStatus = response[number].status;
    if (currentStatus.includes("reviewed")) {
      Status = "reviewed answered";
    } else if (currentStatus === "dumped") {
      Status = "dumped";
    } else {
      Status = "answered";
    }

    setResponse({
      ...response,
      [number]: { response: answer, status: Status },
    });
  };

  let selectStatus = (status: string) => {
    let number = currentQuestion.questionNumber;
    let Status;
    if (response[number].status.includes("answered") && status === "reviewed") {
      Status = "answered reviewed";
    } else {
      Status = status;
    }
    setResponse({
      ...response,
      [number]: { ...response[number], status: Status },
    });
  };

  let clearResponse = () => {
    setResponse({
      ...response,
      [currentQuestion.questionNumber]: { response: "", status: "not-visited" },
    });
  };

  let handlePageNumber = (pageNumber: number) => {
    setPageNumber(pageNumber);
    setCurrentQuestion({
      ...currentQuestion,
      questionNumber: pageNumber,
    });
  };

  useEffect(() => {
    setPageStart(pageLimits[section].start);
    setPageEnd(pageLimits[section].end);
    handlePageNumber(pageStart);
  }, [section, pageStart]);

  let handlePageLink = (e: any) => {
    let page = parseInt(e.target.value);
    setSection("all");
    handlePageNumber(page);
  };

  return (
    <AppContext.Provider
      value={{
        pageNumber: pageNumber,
        pageStart: pageStart,
        pageEnd: pageEnd,
        section: section,
        currentQuestion: currentQuestion,
      }}
    >
      <main className={styles.main}>
        <nav className={styles.nav}>
          <Nav setSection={setSection} />
        </nav>
        <div className={styles.side}>
          <Side response={response} handlePageLink={handlePageLink} />
        </div>
        <div className={styles.content}>
          <Comp
            questions={SampleQuestion}
            selectAnswer={selectAnswer}
            response={response}
          />
        </div>
        <div className={styles.controls}>
          <Controls
            setPageNumber={setPageNumber}
            setCurrentQuestion={setCurrentQuestion}
            selectStatus={selectStatus}
            clearResponse={clearResponse}
          />
        </div>
      </main>
    </AppContext.Provider>
  );
}
