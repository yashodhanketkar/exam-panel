"use client";

import AppContext, { defaultContext } from "./appContext";
import { useState, useEffect } from "react";
import styles from "@/styles/page.module.css";
import Side from "@/component/side";
import Nav from "@/component/section";
import Controls from "@/component/controls";
import Comp from "./comp";

let SampleQuestion = [
  {
    number: 1,
    section: "physics",
    instruction: "Hello world",
    question: "Solve x - y, if x = 5 and y = 6",
    options: ["8", "7", "0", "12"],
  },
  {
    number: 2,
    section: "chemistry",
    instruction: "Hello world",
    question: "Solve x * y, if x = 5 and y = 6",
    options: ["5", "6", "1", "11"],
  },
  {
    number: 3,
    section: "maths",
    instruction: "Hello world",
    question: "Solve x + y, if x = 5 and y = 6",
    options: ["5", "6", "1", "11"],
  },
  {
    number: 4,
    section: "maths",
    instruction: "Hello world 2",
    question: "Solve x / y, if x = 5 and y = 6",
    options: ["5", "6", "1", "11"],
  },
];

let defaultResponse: any = {};

for (let i = 0; i < SampleQuestion.length; i++) {
  defaultResponse[i + 1] = {
    response: "",
    status: "not-visited",
  };
}

export default function Home() {
  const [response, setResponse] = useState(defaultResponse);
  const [section, setSection] = useState(defaultContext.section);
  const [pageNumber, setPageNumber] = useState(defaultContext.pageNumber);
  const [pageStart, setPageStart] = useState(defaultContext.pageStart);
  const [pageEnd, setPageEnd] = useState(defaultContext.pageEnd);
  const [currentQuestion, setCurrentQuestion] = useState(
    defaultContext.currentQuestion
  );

  let pageLimits: any = {
    all: {
      start: 1,
      end: 4,
    },
    physics: {
      start: 1,
      end: 1,
    },
    chemistry: {
      start: 2,
      end: 2,
    },
    maths: {
      start: 3,
      end: 4,
    },
  };

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

  useEffect(() => {
    setPageStart(pageLimits[section].start);
    setPageEnd(pageLimits[section].end);
    setPageNumber(pageStart);
    setCurrentQuestion({
      ...currentQuestion,
      questionNumber: pageStart,
    });
  }, [section, pageStart, pageEnd]);

  console.log(section, pageNumber, currentQuestion.questionNumber);

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
          <Nav
            setSection={setSection}
            setPageStart={setPageStart}
            setPageEnd={setPageEnd}
            setPageNumber={setPageNumber}
            setCurrentQuestion={setCurrentQuestion}
          />
        </nav>
        <div className={styles.side}>
          <Side response={response} />
        </div>
        <div className={styles.content}>
          <Comp
            questions={SampleQuestion}
            selectAnswer={selectAnswer}
            response={response}
          />
          {JSON.stringify(response)}
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
