"use client";

import { solve } from "@/context/features/questionSlice";
import { pageDown, pageUp } from "@/context/features/sectionSlice";
import { RootState } from "@/context/store";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";
import { useEffect, useMemo, useState } from "react";

export const Controls = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const dispatch = useDispatch();
  const { page, min, max } = useSelector((state: RootState) => state.section);
  const disablePrev = useMemo(() => page === min, [page, min]);
  const disableNext = useMemo(() => page === max, [page, max]);

  const handleClear = () =>
    dispatch(
      solve({
        number: page + 1,
        status: "notVisited",
        selected: NaN,
      }),
    );

  const handleReview = () =>
    dispatch(
      solve({
        number: page + 1,
        status: "reviewed",
      }),
    );

  const handleDump = () =>
    dispatch(
      solve({
        number: page + 1,
        status: "dumped",
        selected: NaN,
      }),
    );

  if (!mounted) return null;

  return (
    <ButtonGroup className="absolute bottom-16 left-4">
      <Button onClick={handleClear} className="controls">
        Clear Response
      </Button>
      <Button onClick={handleReview} className="controls">
        Review
      </Button>
      <Button onClick={handleDump} className="controls">
        Dump
      </Button>
      <Button
        onClick={() => dispatch(pageDown())}
        disabled={!mounted ? true : disablePrev}
        className="controls"
      >
        Previous
      </Button>
      <Button
        onClick={() => dispatch(pageUp())}
        disabled={!mounted ? true : disableNext}
        className="controls"
      >
        Next
      </Button>
    </ButtonGroup>
  );
};
