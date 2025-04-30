import { QuestionObj } from "./question";

export type Questions = {
  [key: number]: QuestionObj;
};

export const questions: Questions = {
  1: { index: 1, text: "勘は冴えてる方だ", yes: 7, no: 2 },
  2: { index: 2, text: "散歩は好き？", yes: 3, no: 6 },
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
    text: "旅行するなら海外がいい？",
    yes: {
      name: "パラダイスキラー",
      url: "https://store-jp.nintendo.com/item/software/D70010000037418",
    },
    no: {
      name: "都市伝説解体センター",
      url: "https://store-jp.nintendo.com/item/software/D70010000073247",
    },
  },
  6: {
    index: 6,
    text: "長く続いてる趣味がある",
    yes: {
      name: "グノーシア",
      url: "https://store-jp.nintendo.com/item/software/D70010000027791",
    },
    no: {
      name: "OPUS 地球計画",
      url: "https://store-jp.nintendo.com/item/software/D70010000002823",
    },
  },
  7: {
    index: 7,
    text: "chillしたい？",
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