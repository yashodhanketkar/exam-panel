"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerDescription,
  DrawerClose,
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

  return <SideContent />;
};

const SideContent = () => {
  return (
    <div className="flex flex-col space-y-2 my-2 w-">
      <Info />
      <Pallet />
      <Legend />
      <LegendActions />
    </div>
  );
};

export const SideDrawer = () => {
  return (
    <DrawerContent>
      <DrawerHeader>
        <DrawerTitle>Options</DrawerTitle>
        <DrawerDescription>Reset, Review, and more actions</DrawerDescription>
        <DrawerCloser />
        <SideContent />
      </DrawerHeader>
    </DrawerContent>
  );
};

const DrawerCloser = () => (
  <DrawerClose
    render={
      <Button size="icon" className="fixed top-2 right-2" variant="outline">
        <X className="stroke-red-500" />
      </Button>
    }
  />
);
