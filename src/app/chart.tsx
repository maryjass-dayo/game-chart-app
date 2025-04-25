"use client";

import React, { useState } from "react";
import "./chart.css";
import { Question } from "./question";
import { Result, ResultObj } from "./result";
import { Questions } from "./questions";

type ChartProps = {
  questions: Questions;
};

export const Chart = ({ questions }: ChartProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(1);
  const [result, setResult] = useState<ResultObj | null>(null);

  const handleAnswer = (answer: "yes" | "no") => {
    const currentQuestion = questions[currentQuestionIndex];
    const next = currentQuestion[answer];
    if (typeof next === "number") {
      setCurrentQuestionIndex(next);
    } else {
      setResult(next as ResultObj);
    }
  };

  const reset = () => {
    setCurrentQuestionIndex(1);
    setResult(null);
    return;
  };

  return result ? (
    <Result result={result} onReset={reset} />
  ) : (
    <Question
      text={questions[currentQuestionIndex].text}
      onAnswer={handleAnswer}
    />
  );
};
