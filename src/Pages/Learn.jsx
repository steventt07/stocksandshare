import React, { useEffect, useState } from "../../node_modules/react";
import { Header, Footer } from "../Components/Layouts";
import { Charts, ChartForm } from "../Components";

const Learn = () => {
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    fetch("http://0.0.0.0:8000/charts").then(response =>
      response.json().then(data => {
        setCharts(data.charts);
      })
    );
  }, []);

  return (
    <div className="container">
      <Header />
      <h2>Learn Page</h2>
      <ChartForm />
      <Charts charts={charts} />
      <Footer />
    </div>
  );
};

export default Learn;
