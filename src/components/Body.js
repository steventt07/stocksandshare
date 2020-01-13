import React from "react";
import StockNote from "./StockNote";

function Body() {
  const friend1 = "Cameron Dekohary";
  const friend2 = "Alondra Torres";
  const friend3 = "Hanna Banana";
  return (
    <body>
      <StockNote
        name="AMD"
        imgUrl="amd.png"
        note="The chart broke the channel, it looks like it's going to test the bottom trendline."
      />
      <p>Trade Checklist</p>
      <ul>
        <li>Come up with more of a game plan in the trade </li>
        <li>
          Set alerts to support/resistance line and based your trade off of that{" "}
        </li>
        <li>What kind of returns am I looking for this trade</li>
        <li>What kind of loss am I willing to lose for this trade</li>
        <li>How long am I planning on taking this trade </li>
        <li>When would be a good time to average down</li>
      </ul>
      <p>Mindset</p>
      <ul>
        <li>
          If you need to watch the price action of the stock, you shouldn’t be
          in the position{" "}
        </li>
        <li>
          If the price action goes past your support line, wait for the test of
          the supportline and sell there
        </li>
        <li>
          If the price action goes in your direction greater than expected, take
          some profits and reduce your risk
        </li>
      </ul>
      <p>Stock analysis guildline</p>
      <ul>
        <li>It should take 5-10 minutes to fully analyze a chart </li>
        <li>Draw out support/resistance line </li>
        <li>Draw out trendlines on the daily, 4 hour, and 15 minutes </li>
      </ul>
      <p>Hi {friend1}</p>
      <p>Hi {friend2}</p>
      <p>Hi {friend3}</p>
    </body>
  );
}

export default Body;
