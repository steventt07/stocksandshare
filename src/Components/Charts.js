import React from "react";
import { List } from "../../node_modules/semantic-ui-react";
import { Form } from "../../node_modules/semantic-ui-react";
import TextField from "@material-ui/core/TextField";

export const Charts = ({ charts }) => {
  const styles = { style: { textAlign: "center" } };
  const flexContainer = {
    display: "flex",
    flexDirection: "row",
    "padding-top": "10px"
  };
  return (
    <List>
      {charts.map(chart => {
        return (
          <div className="box-1">
            <Form>
              <TextField
                inputProps={styles}
                label="Symbol"
                value={chart.symbol}
                variant="outlined"
                fullWidth
              />
              <img src={`data:image/png;base64,${chart.image}`} />
              <br />
              <TextField
                inputProps={styles}
                label="Note"
                value={chart.note}
                variant="outlined"
                fullWidth
              />
              <form style={flexContainer}>
                <TextField
                  inputProps={styles}
                  label="Entry Point"
                  value={chart.entry_point}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  inputProps={styles}
                  label="Sell Limit"
                  value={chart.sell_limit}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  inputProps={styles}
                  label="Stop Limit"
                  value={chart.stop_limit}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  inputProps={styles}
                  label="Date Created"
                  value={chart.date_created}
                  variant="outlined"
                  fullWidth
                />
              </form>
              <br />
            </Form>
          </div>
        );
      })}
    </List>
  );
};
