import React from "../../node_modules/react";
import { Header, Footer } from "../Components/Layouts";
import { FeaturePageData } from "../Data";

const Feature = () => {
  const listComponent = List => {
    return List.map(item => {
      return <li>{item}</li>;
    });
  };
  return (
    <div className="container">
      <Header />
      <h2>Feature Page</h2>
      <div className="categories">
        <h2>Phase 1</h2>
        <p>{FeaturePageData.phase_1}</p>
      </div>
      <div className="categories">
        <h2>Phase 2</h2>
        <p>{FeaturePageData.phase_2}</p>
      </div>
      <div className="categories">
        <h2>Phase 3</h2>
        <p>{FeaturePageData.phase_3}</p>
      </div>
      <div className="categories">
        <h2>Phase 4</h2>
        <p>{FeaturePageData.phase_4}</p>
      </div>
      <div className="categories">
        <h2>What I've done so far</h2>
        <ul>{listComponent(FeaturePageData.complete_task)}</ul>
      </div>
      <div className="categories">
        <h2>Feature backlog</h2>
        <ul>{listComponent(FeaturePageData.backlog)}</ul>
      </div>
      <Footer />
    </div>
  );
};

export default Feature;
