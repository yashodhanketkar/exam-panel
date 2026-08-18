"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { LegendActions } from "./actions";
import { Info } from "./info";
import { Legend } from "./legend";
import { Pallet } from "./pallet";
import { Button } from "../ui/button";

export const Side = () => {
  const isMobile = useIsMobile();

  if (isMobile)
    return (
      <Drawer swipeDirection="right">
        <DrawerTrigger
          render={
            <Button size="icon" className="fixed top-2 right-2">
              <Menu />
            </Button>
          }
        />
        <SideDrawer />
      </Drawer>
    );

  return (
    <div className="flex flex-col space-y-2 my-2 w-">
      <SideContent />
    </div>
  );
};

const SideContent = () => {
  return (
    <>
      <Info />
      <Pallet />
      <Legend />
      <LegendActions />
    </>
  );
};

export const SideDrawer = () => {
  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Demo Test Options</DrawerTitle>
        <SideContent />
      </DrawerHeader>
    </DrawerContent>
  );
};
