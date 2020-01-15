import React from "react";
import { List, Header } from "semantic-ui-react";
export const Charts = ({ charts }) => {
  return (
    <List>
      {charts.map(charts => {
        return (
          <List.Item key={charts.chart_id}>
            <Header>{charts.symbol}</Header>
          </List.Item>
        );
      })}
    </List>
  );
};
