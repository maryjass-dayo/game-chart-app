import React from "react";
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";

export default function Home(): React.ReactNode {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
