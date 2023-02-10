"use client";

import Countdown from "react-countdown";
import { useState } from "react";
import styles from "@/styles/components.module.css";

function getImageLink(): string {
  return "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
}

function getName(): string {
  return "John Doe";
}

const defaultTime = 10800000;

export default function Info() {
  const [key, setKey] = useState("");
  const [time, setTime] = useState(Date.now() + defaultTime);

  let handleReset = () => {
    setTime(defaultTime);
    setKey(`${Date.now()}`);
  };

  return (
    <div className={styles.info}>
      <img
        src={getImageLink()}
        alt="Profile picture"
        className={styles.infoPicture}
      />
      <div className={styles.infoTime}>
        Time Left:
        <span>
          <Countdown key={key} date={time} precision={0}>
            <button onClick={handleReset}>Time over</button>
          </Countdown>
        </span>
      </div>
      <div className={styles.infoName}>
        Name:<span>{getName()}</span>
      </div>
    </div>
  );
}
