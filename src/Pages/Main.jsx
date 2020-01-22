import React from "react";
import "../index.css";
import { Header, Footer } from "../Components/Layouts";
import { Body } from "../Components";

function Main() {
  return (
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default Main;
