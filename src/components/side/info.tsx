"use client";

import { UserRound } from "lucide-react";
import { useState } from "react";
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

const DEFAULTTIME = 1000 * 60 * 30;

export const Info = () => {
  const [key, setKey] = useState("");
  const [time, setTime] = useState(Date.now() + DEFAULTTIME);

  let handleReset = () => {
    setTime(DEFAULTTIME);
    setKey(`${Date.now()}`);
  };

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
      <CardContent>
        Time Left:
        <span className="mx-2">
          <Countdown key={key} date={time} precision={0}>
            <button onClick={handleReset}>Time over</button>
          </Countdown>
        </span>
      </CardContent>
    </Card>
  );
};
