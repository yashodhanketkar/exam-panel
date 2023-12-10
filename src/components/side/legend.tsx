"use client";

import type { RootState } from "@/context/store";
import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

type LegendPopUpProps = {
  range: number;
};

function LegendPopUp({ range }: LegendPopUpProps) {
  return (
    <div className="bg-blue-200 text-white font-semibold">
      <p className="bg-blue-500 text-center p-1">{range} Questions</p>
      <div className="grid-cols-2 gap-1 grid p-1">
        <button className="bg-blue-500 p-1 rounded">Profile</button>
        <button className="bg-blue-500 p-1 rounded">Instructions</button>
        <button className="bg-blue-500 p-1 rounded">Questions</button>
        <button className="bg-blue-500 p-1 rounded">Submit</button>
      </div>
    </div>
  );
}

export default function Legend() {
  const question = useSelector((state: RootState) => state.question.value);
  const range = question.length;
  const [show, setShow] = useState(false);

  let answered = 0;
  let notVisited = 0;
  let reviewed = 0;
  let reviewedAnswered = 0;
  let dumped = 0;

  question.forEach((ele) => {
    if (ele.selected || ele.selected === 0) {
      answered++;
    } else {
      notVisited++;
    }
    switch (ele.status) {
      case "reviewed":
        reviewed++;
        break;
      case "dumped":
        dumped++;
        break;
      default:
        reviewedAnswered++;
        break;
    }
  });

  return (
    <>
      <div className="bg-blue-200 transition-all duration-100 flex flex-col gap-1">
        <button
          onClick={() => setShow(!show)}
          className="bg-blue-500 text-white font-semibold p-1 rounded-t-md w-full"
        >
          Legend (
          <Link className="underline" href="/">
            click to view
          </Link>
          )
        </button>
        {show && (
          <>
            <div className="grid grid-cols-2 text-center capitalize [&>*]:line-clamp-1">
              <span className="py-1 bg-green-700">{answered} Answered</span>
              <span className="py-1 bg-gray-400">
                {notVisited} Not answered
              </span>
              <span className="py-1 bg-fuchsia-700">{reviewed} Reviewed</span>
              <span className="py-1 bg-white">{dumped} Dumped</span>
            </div>
            <LegendPopUp range={range} />
          </>
        )}
      </div>
    </>
  );
}
