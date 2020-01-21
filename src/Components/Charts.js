import React from "../../node_modules/react";
import { List, Header } from "../../node_modules/semantic-ui-react";

export const Charts = ({ charts, username }) => {
  return (
    <List>
      {charts.map(chart => {
        return (
          <div className="box-1">
            <List.Item key={chart.chart_id}>
              <Header>Symbol: {chart.symbol}</Header>
              <img src={`data:image/png;base64,${chart.image}`} />
              <p>Note: {chart.note}</p>
              <p>Entryprice: {chart.entryprice}</p>
              <p>Sell Limit: {chart.sellLimit}</p>
              <p>Stop Limit: {chart.stopLimit}</p>
            </List.Item>
          </div>
        );
      })}
    </List>
  );
};
