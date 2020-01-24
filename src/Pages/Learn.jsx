import React from "react";
import { Header, Footer } from "../Components/Layouts";
import { MainPageData } from "../Data";

const Learn = () => {
  const listComponent = List => {
    return List.map(item => {
      return <li>{item}</li>;
    });
  };
  const sectionComponent = Object => {
    return Object.map(item => {
      return (
        <div className="categories">
          <h2>{item.title}</h2>
          <ul>{listComponent(item.content)}</ul>
        </div>
      );
    });
  };
  return (
    <div className="container">
      <Header />
      <h2>Learn Page</h2>
      {sectionComponent(MainPageData)}
      <Footer />
    </div>
  );
};

export default Learn;
