import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
const AboutPage = () => {
  return (
    <div>
      <Header />
      <h2>About Page</h2>
      <title>Motivation</title>
      <p>
        I'm creating this website as a way for traders to learn and teach
        others. They say that 90% of traders will lose money and I can attest to
        that fact. The scary thing with trading, is that there is too much
        information to look through. How do you separate the noise from what you
        want to hear? From my experience, there are many trading strategies, and
        they all only take a subset of the data available. My goal is to
        eventually have all different types of traders on this platform, so we
        can all learn something new.
      </p>
      <Footer />
    </div>
  );
};

export default AboutPage;
