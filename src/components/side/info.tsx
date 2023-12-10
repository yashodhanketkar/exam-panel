"use client";

import Image from "next/image";
import { useState } from "react";
import Countdown from "react-countdown";

function getImageLink(): string {
  return "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg";
}

const DEFAULTTIME = 1000 * 60 * 30;

export const Info = () => {
  const [key, setKey] = useState("");
  const [time, setTime] = useState(Date.now() + DEFAULTTIME);

  let handleReset = () => {
    setTime(DEFAULTTIME);
    setKey(`${Date.now()}`);
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-32">
        <Image
          src={getImageLink()}
          alt="Profile picture"
          width={300}
          height={600}
          className="w-auto h-auto aspect-[1/1.25] rounded-md"
        />
      </div>
      <div className="py-1 px-2">
        <p className="flex flex-col w-full">
          Time Left:
          <span>
            <Countdown key={key} date={time} precision={0}>
              <button onClick={handleReset}>Time over</button>
            </Countdown>
          </span>
        </p>
        <p className="flex flex-col w-full">
          Name:<span>John Doe</span>
        </p>
      </div>
    </div>
  );
};
