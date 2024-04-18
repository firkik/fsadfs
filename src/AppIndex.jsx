import "./App.css";
import React from "react";
import Collection from "./components/Collection";
import Header from "./components/Header";
import Preview from "./components/Preview";
import Roadmap from "./components/Roadmap";
import Tokenomics from "./components/Tokenomics";
import WhitePaper from "./components/WhitePaper";
import Footer from "./components/Footer";

export default function AppIndex() {
  return (
    <div>
      <div className="mx-auto px-5 sm:px-0">
        <Header />
        <main>
          <Preview />
          <Collection />
          <Roadmap />
          <Tokenomics />
        </main>
        <WhitePaper />
      </div>
      <Footer />
    </div>
  );
}
