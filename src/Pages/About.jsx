import React from "react";
import "../index.css";
import { Header, Footer } from "../Components/Layouts";

const About = () => {
  return (
    <div className="container">
      <Header />
      <h2>About Page</h2>
      <div>
        <div className="box-1">
          <h3>Motivation</h3>
          <p>
            I'm creating this website as a way for traders to learn and teach
            others. They say that 90% of traders will lose money and I can
            attest to that fact. The scary thing with trading, is that there is
            too much information to look through. How do you separate the noise
            from what you want to hear? From my experience, there are many
            trading strategies, and they all only take a subset of the data
            available. My goal is to eventually have all different types of
            traders on this platform, so we can all learn something new.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
