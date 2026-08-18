"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const QuestionsHeader = ({ nos }: { nos: number }) => {
  return (
    <div className="col-span-2 inline-flex justify-between items-center bg-primary p-2 rounded-md">
      <p className="text-accent">Q. No.{nos}</p>
      <Select defaultValue="English">
        <SelectTrigger className="bg-background">
          <SelectValue placeholder="Select language" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem>English</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
