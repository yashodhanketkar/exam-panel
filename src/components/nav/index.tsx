"use client";

import type { Section } from "@/context/features/sectionSlice";
import { select } from "@/context/features/sectionSlice";
import { RootState } from "@/context/store";
import { useDispatch, useSelector } from "react-redux";

const availSection: Section[] = ["all", "physics", "chemistry", "maths"];

export const Nav = () => {
  const dispatch = useDispatch();
  const section = useSelector((state: RootState) => state.section.value);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 p-2 lg:w-2/3">
      {availSection.map((sec, i) => (
        <button
          key={i}
          onClick={() => dispatch(select(sec))}
          className={`controls ring-1 ${
            section === sec ? "font-semibold ring-black/30" : "ring-black/0 "
          }`}
        >
          {sec}
        </button>
      ))}
    </div>
  );
};
