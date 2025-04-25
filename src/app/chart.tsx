"use client";

import React, { useState } from "react";
import "./chart.css";

interface QuestionObj {
  index: number;
  text: string;
  yes: number | ResultObj;
  no: number | ResultObj;
}

interface ResultObj {
  name: string;
  url: string;
}

interface Questions {
  [key: number]: QuestionObj;
}

const questions: Questions = {
  1: { index: 1, text: "サクッと遊べるゲームがいい？", yes: 7, no: 2 },
  2: { index: 2, text: "ミステリーが好き？", yes: 3, no: 6 },
  3: { index: 3, text: "秋が一番好き？", yes: 4, no: 5 },
  4: {
    index: 4,
    text: "人懐っこいほうだ",
    yes: {
      name: "オブラディン号の帰還",
      url: "https://store-jp.nintendo.com/item/software/D70010000024506",
    },
    no: {
      name: "The Case of the Golden Idol",
      url: "https://store-jp.nintendo.com/item/software/D70010000086589",
    },
  },
  5: {
    index: 5,
    text: "長く続いてる趣味がある",
    yes: {
      name: "グノーシア",
      url: "https://store-jp.nintendo.com/item/software/D70010000027791",
    },
    no: {
      name: "未解決事件は終わらせないといけないから",
      url: "https://store-jp.nintendo.com/item/software/D70010000083094",
    },
  },
  6: {
    index: 6,
    text: "休日は家でゆっくりするタイプ？",
    yes: {
      name: "ファミレスを享受せよ",
      url: "https://store-jp.nintendo.com/item/software/D70010000070959",
    },
    no: {
      name: "Unpacking",
      url: "https://store-jp.nintendo.com/item/software/D70010000043204",
    },
  },
  7: {
    index: 7,
    text: "旅行好き？",
    yes: {
      name: "Unpacking",
      url: "https://store-jp.nintendo.com/item/software/D70010000043204",
    },
    no: 8,
  },
  8: {
    index: 8,
    text: "節約中？",
    yes: {
      name: "ファミレスを享受せよ",
      url: "https://store-jp.nintendo.com/item/software/D70010000070959",
    },
    no: {
      name: "未解決事件は終わらせないといけないから",
      url: "https://store-jp.nintendo.com/item/software/D70010000083094",
    },
  },
};

interface QuestionProps {
  text: string;
  onAnswer: (answer: "yes" | "no") => void;
}

const Question: React.FC<QuestionProps> = ({ text, onAnswer }) => (
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

interface ResultProps {
  result: ResultObj;
  onReset: () => void;
}

const Result: React.FC<ResultProps> = ({ result, onReset }) => {
  const { name, url } = result;

  return (
    <div>
      <h2>診断結果</h2>
      <p>
        あなたにオススメなのは
        <br />
        <span style={{ fontWeight: "bold" }}>{name}</span>です
      </p>
      <div className="flex">
        <button className="result">
          <a href={url} target="_blank" rel="noreferrer">
            詳しく見る
          </a>
        </button>
        <button className="reset" onClick={onReset}>
          やりなおす
        </button>
      </div>
    </div>
  );
};

export const Chart: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(1);
  const [result, setResult] = useState<ResultObj | null>(null);

  console.log('作り甘いところあるので裏はあまり見ないでね');

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
