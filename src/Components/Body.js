import React from "../../node_modules/react";
import StockNote from "./StockNote";
import { MainPageData } from "../Data";

function Body() {
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
    <div>
      <div className="categories">
        <StockNote
          name="AMD"
          note="The chart broke the channel, it looks like it's going to test the bottom trendline."
          imgUrl="amd.png"
        />
      </div>
      {sectionComponent(MainPageData)}
    </div>
  );
}

export default Body;
