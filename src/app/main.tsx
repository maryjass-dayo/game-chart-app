"use client";

import React from "react";
import { Chart } from "./chart";
import { questions as questionsData } from "./questions";

export const Main: React.FC = () => {
  console.log("作り甘いところあるので裏はあまり見ないでね");
  const questions = questionsData;

  return (
    <main>
      <Chart questions={questions} />
    </main>
  );
};
