import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { formatDate } from "@/app/blog/utils";

type Props = {
  title: string;
  summary: string;
  date: string;
};

const CardCategory = ({ title, summary, date }: Props) => {
  return (
    <Card className="mx-auto max-w-[350px] min-h-[290px] shadow-lg">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="">{summary}</p>
      </CardContent>
      <CardFooter>
        <p>{formatDate(date)}</p>
      </CardFooter>
    </Card>
  );
};

export default CardCategory;
