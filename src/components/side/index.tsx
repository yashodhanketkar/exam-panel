"use client";

import { LegendActions } from "./actions";
import { Info } from "./info";
import { Legend } from "./legend";
import { Pallet } from "./pallet";

export const Side = () => {
  return (
    <div className="flex flex-col space-y-2 my-2 w-">
      <Info />
      <Pallet />
      <Legend />
      <LegendActions />
    </div>
  );
};
