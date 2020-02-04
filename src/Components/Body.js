import React from "react";

function Body() {
  let styles = {
    textAlign: "center"
  };
  return (
    <div>
      <br />
      <div className="categories">
        <h2>Stocks and Share</h2>
        <p style={styles}>
          A place where traders can reflect on their trades and for others to
          learn from their success/mistakes
        </p>
      </div>
      <div className="categories">
        <h2>Traders</h2>
        <p>
          This is a place where you can keep track of your thought process
          throughout a trade. One of the main problems with trading is that all
          of your thoughts are inside your head. Once you documented these
          thoughts somewhere, they are real, and you can look back and see why
          you took that trade. This will allow you to reflect on your initial
          analysis. Once you get in the habit of doing this, you can be more
          consistent in your trading, as you know why your winners are winners
          and why your losers are losers.
        </p>
      </div>
      <div className="categories">
        <h2>Users</h2>
        <p>
          Have you ever wondered how the stocks market works? There is so much
          information out there, that it's hard to pinpoint what to look at.
          With this platform, you are able to see the thought process of a
          trader when they take on a trade. There are many different style of
          trading and being able to see what other are doing can help you
          identify what works for you.
        </p>
      </div>
    </div>
  );
}

export default Body;
