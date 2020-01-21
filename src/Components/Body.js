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
  let styles = {
    textAlign: "center"
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
      <div className="categories">
        <p style={styles}>
          A place where traders can reflect on their trades and for others to
          learn from their success/mistakes
        </p>
        <p>
          Traders: This is a place where you can keep track of your thought
          process throughout a trade. One of the main problems with trading is
          that all of your thoughts are inside your head. Once you documented
          these thoughts somewhere, they are real, and you can look back and see
          why you took that trade. This will allow you to reflect on your
          initial analysis. Once you get in the habit of doing this, you can be
          more consistent in your trading, as you know why your winners are
          winners and why your losers are losers.
        </p>
        <p>
          Users: Have you ever wondered how the stocks market works? There is so
          much information out there, that it's hard to pinpoint what to look
          at. With this platform, you are able to see the thought process of a
          trader when they take on a trade. There are many different style of
          trading and being able to see what other are doing can help you
          identify what works for you.
        </p>
      </div>
      {sectionComponent(MainPageData)}
    </div>
  );
}

export default Body;
