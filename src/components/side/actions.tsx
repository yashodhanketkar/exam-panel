import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { useSelector } from "react-redux";
import { RootState } from "@/context/store";
import { Button } from "../ui/button";

export const LegendActions = () => {
  const question = useSelector((state: RootState) => state.question.value);
  const range = question.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{range} Questions</CardTitle>
        <CardDescription>Use the buttons below to navigate</CardDescription>
      </CardHeader>
      <CardFooter className="grid grid-cols-2 gap-1">
        <Button>Profile</Button>
        <Button>Instructions</Button>
        <Button>Questions</Button> <Button>Submit</Button>
      </CardFooter>
    </Card>
  );
};
