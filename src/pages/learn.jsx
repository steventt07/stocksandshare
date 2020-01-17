import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Charts } from "../components/Charts";
import { ChartForm } from "../components/ChartForm";
import { Container } from "semantic-ui-react";

const LearnPage = () => {
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    fetch("/charts").then(response =>
      response.json().then(data => {
        setCharts(data.charts);
      })
    );
  }, []);

  return (
    <div class="container">
      <Header />
      <h2>Learn Page</h2>
      <ChartForm />
      <Charts charts={charts} />
      <Footer />
    </div>
  );
};

export default LearnPage;
