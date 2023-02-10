"use client";

import Countdown from "react-countdown";
import { useEffect, useState } from "react";
import styles from "@/styles/components.module.css";

function getTimer(): number {
  return 4.5;
}

function getImageLink(): string {
  return "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
}

function getName(): string {
  return "John Doe";
}

export default function Info() {
  const [key, setKey] = useState("");

  let handleReset = () => {
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
          <Countdown key={key} date={Date.now() + 10800000}>
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
