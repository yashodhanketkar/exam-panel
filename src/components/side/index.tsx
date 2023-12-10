"use client";

import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Info } from "./info";
import Legend from "./legend";
import Pallet from "./pallet";

export const Side = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow((prev) => !prev);

  return (
    <>
      <button
        className="md:hidden fixed z-50 top-2 right-2 bg-blue-500 p-2 rounded"
        onClick={toggleShow}
      >
        <GiHamburgerMenu color="white" />
      </button>
      <div className="hidden w-auto right-0 flex-col md:flex gap-1 h-fit justify-between shadow shadow-black/25 my-2 rounded-md">
        <Info />
        <Pallet />
        <Legend />
      </div>
      {show && (
        <div className="fixed md:hidden p-4 w-screen top-0 left-0 right-0 z-40 flex-col flex gap-1 justify-between shadow shadow-black/25 rounded-md bg-blue-50 overflow-y-auto h-screen">
          <Info />
          <Pallet />
          <Legend />
        </div>
      )}
    </>
  );
};
