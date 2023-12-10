"use client";

import { solve } from "@/context/features/questionSlice";
import { pageDown, pageUp } from "@/context/features/sectionSlice";
import { RootState } from "@/context/store";
import { useDispatch, useSelector } from "react-redux";

export const Controls = () => {
  const dispatch = useDispatch();
  const page = useSelector((state: RootState) => state.section.page);

  const handleClear = () =>
    dispatch(
      solve({
        number: page + 1,
        status: "notVisited",
        selected: NaN,
      })
    );

  const handleReview = () =>
    dispatch(
      solve({
        number: page + 1,
        status: "reviewed",
      })
    );

  const handleDump = () =>
    dispatch(
      solve({
        number: page + 1,
        status: "dumped",
        selected: NaN,
      })
    );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1 w-full xl:w-fit p-2 xl:fixed xl:bottom-16">
      <button onClick={handleClear} className="controls">
        clear response
      </button>
      <button onClick={handleReview} className="controls">
        review
      </button>
      <button onClick={handleDump} className="controls">
        dump
      </button>
      <button onClick={() => dispatch(pageDown())} className="controls">
        previous
      </button>
      <button onClick={() => dispatch(pageUp())} className="controls">
        next
      </button>
    </div>
  );
};
