import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Charts } from "../components/Charts";
import { ChartForm } from "../components/ChartForm";
import { Container } from "semantic-ui-react";

const LearnPage = () => {
  const [charts, setCharts] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/charts").then(response =>
      response.json().then(data => {
        setCharts(data.charts);
      })
    );
  }, []);

  return (
    <div>
      <Header />
      <h2>Learn Page</h2>
      <Container>
        <ChartForm />
        <Charts charts={charts} />
        <p>Coming Soon</p>
      </Container>
      <Footer />
    </div>
  );
};

export default LearnPage;
