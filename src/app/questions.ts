import { QuestionObj } from "./question";

export type Questions = {
  [key: number]: QuestionObj;
};

export const questions: Questions = {
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