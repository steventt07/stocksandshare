import React from "react";
import { List, Header } from "semantic-ui-react";
export const Charts = ({ charts }) => {
  return (
    <List>
      {charts.map(chart => {
        return (
          <div class="box-1">
            <List.Item key={chart.chart_id}>
              <Header>{chart.symbol}</Header>
              <img src={`data:image/png;base64,${chart.image}`} />
              <p>{chart.note}</p>
            </List.Item>
          </div>
        );
      })}
    </List>
  );
};
