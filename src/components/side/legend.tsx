import type { RootState } from "@/context/store";
import { useSelector } from "react-redux";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ItemGroup } from "../ui/item";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { SampleQuestionType } from "@/constants/sampleData";

const CurrentStats = ({ questions }: { questions: SampleQuestionType[] }) => {
  let answered = 0;
  let notVisited = 0;
  let reviewed = 0;
  let reviewedAnswered = 0;
  let dumped = 0;

  questions.forEach((ele) => {
    if (ele.selected || ele.selected === 0) {
      answered++;
    } else {
      notVisited++;
    }
    switch (ele.status) {
      case "reviewed":
        reviewed++;
        break;
      case "dumped":
        dumped++;
        break;
      default:
        reviewedAnswered++;
        break;
    }
  });

  return {
    answered,
    notVisited,
    reviewed,
    reviewedAnswered,
    dumped,
  };
};

export const Legend = () => {
  const question = useSelector((state: RootState) => state.question.value);
  const stats = CurrentStats({ questions: question });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Legend</CardTitle>
        <CardDescription>Current question stats</CardDescription>
      </CardHeader>
      <CardFooter>
        <LegendContent
          items={{
            Answered: stats.answered,
            NotVisited: stats.notVisited,
            Reviewed: stats.reviewed,
            Dumped: stats.reviewedAnswered,
          }}
        />
      </CardFooter>
    </Card>
  );
};

const LegendContent = ({ items }: { items: Record<string, number> }) => {
  return (
    <ItemGroup className="grid grid-cols-2">
      {Object.entries(items).map(([name, value]) => (
        <Badge
          key={name + value}
          variant="outline"
          className={cn(name.toLowerCase(), "w-full p-4 rounded-sm")}
        >{`${name}: ${value}`}</Badge>
      ))}
    </ItemGroup>
  );
};
