import React from "../../node_modules/react";
import { List, Header } from "../../node_modules/semantic-ui-react";

export const Charts = ({ charts }) => {
  return (
    <List>
      {charts.map(chart => {
        return (
          <div className="box-1">
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
