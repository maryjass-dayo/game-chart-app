import React from "react";
import { ResultObj } from "./result";

export type QuestionObj = {
  index: number;
  text: string;
  yes: number | ResultObj;
  no: number | ResultObj;
};

type QuestionProps = {
  text: string;
  onAnswer: (answer: "yes" | "no") => void;
};

export const Question: React.FC<QuestionProps> = ({ text, onAnswer }) => (
  <div>
    <h2>質問</h2>
    <p>{text}</p>
    <div className="flex">
      <button className="yes" onClick={() => onAnswer("yes")}>
        はい
      </button>
      <button className="no" onClick={() => onAnswer("no")}>
        いいえ
      </button>
    </div>
  </div>
);