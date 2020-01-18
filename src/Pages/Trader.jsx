import React from "../../node_modules/react";
import { Header, Footer } from "../Components/Layouts";

const Trader = () => {
  return (
    <div className="container">
      <Header />
      <h2>Traders</h2>
      <h3>Steven Tran - Technical Analysis</h3>
      <h3>Cheten - News/Momentum</h3>
      <Footer />
    </div>
  );
};

export default Trader;
