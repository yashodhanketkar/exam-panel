"use client";

import type { Section } from "@/context/features/sectionSlice";
import { select } from "@/context/features/sectionSlice";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RootState } from "@/context/store";

const availSection: Section[] = ["all", "physics", "chemistry", "maths"];

export const Nav = () => {
  const dispatch = useDispatch();
  const activeSection = useSelector((state: RootState) => state.section);

  return (
    <Tabs value={activeSection.value}>
      <TabsList className="m-2 space-x-2">
        {availSection.map((sec) => (
          <TabsTrigger
            className="p-2 capitalize"
            onClick={() => dispatch(select(sec))}
            value={sec}
            key={sec}
          >
            {sec}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
