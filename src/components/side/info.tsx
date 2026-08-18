"use client";

import { UserRound } from "lucide-react";
import Countdown from "react-countdown";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { useDispatch, useSelector } from "react-redux";
import { reset as resetSection } from "@/context/features/sectionSlice";
import { reset as resetQuestion } from "@/context/features/questionSlice";
import { setGlobalTimer } from "@/context/features/timerSlice";
import { useEffect, useState } from "react";
import { RootState } from "@/context/store";

const LIMIT = 1000 * 60 * 30;

export const Info = () => {
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!timeStamp) {
      setGlobalTimer(Date.now() + LIMIT);
    }
  });

  let handleReset = () => {
    const newLimit = Date.now() + LIMIT;
    dispatch(setGlobalTimer(newLimit));
    dispatch(resetSection());
    dispatch(resetQuestion());
  };

  const state = useSelector((state: RootState) => state.timer);
  const timeStamp = state.timestamp;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex flex-row items-center gap-2">
          <span className="ring ring-black/25 rounded-full p-1">
            <UserRound />
          </span>
          <span>John Doe</span>
        </CardTitle>
        <CardDescription>Examinee details</CardDescription>
        <CardAction onClick={handleReset}>
          <Button onClick={handleReset}>Restart</Button>
        </CardAction>
      </CardHeader>
      {mounted && (
        <CardContent>
          Time Left:
          <span className="mx-2">
            <Countdown key={Math.random()} date={timeStamp!} precision={0}>
              <button onClick={handleReset}>Time over</button>
            </Countdown>
          </span>
        </CardContent>
      )}
    </Card>
  );
};
