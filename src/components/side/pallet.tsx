"use client";

import { select, setPage } from "@/context/features/sectionSlice";
import type { RootState } from "@/context/store";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const Pallet = () => {
  const dispatch = useDispatch();
  const question = useSelector((state: RootState) => state.question.value);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Question Pallet</CardTitle>
        <CardDescription>Click on the question to select</CardDescription>
      </CardHeader>
      <CardFooter className="grid grid-cols-5 w-full">
        {question.map((q, i) => (
          <Button
            title={q.status}
            variant="outline"
            onClick={() => {
              dispatch(setPage(i));
              dispatch(select("all"));
            }}
            key={i}
            value={i}
            className={q.status.toLowerCase()}
          >
            {i + 1}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
};
