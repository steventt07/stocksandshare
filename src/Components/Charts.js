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
  var entry = "";
  var sell = "";
  var stop = "";

  return (
    <List>
      {charts.map(chart => {
        if (chart.trade_type == "WATCHLIST") {
          return (
            <div className="box-1">
              <Form>
                <form style={flexContainer}>
                  <TextField
                    inputProps={styles}
                    label={chart.trade_type}
                    value={chart.symbol}
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
                <img src={`data:image/png;base64,${chart.image}`} />
                <br />
                <TextField
                  inputProps={styles}
                  label="Note"
                  value={chart.note}
                  variant="outlined"
                  multiline={true}
                  rows={4}
                  rowsMax={10}
                  fullWidth
                />
                <br />
              </Form>
            </div>
          );
        } else {
          if (chart.trade_type == "LONG") {
            entry = "Entry Point";
            sell = "Sell Limit";
            stop = "Stop Limit";
          } else if (chart.trade_type == "SHORT") {
            entry = "Sell Point";
            sell = "Cover Limit";
            stop = "Stop Limit";
          }
          return (
            <div className="box-1">
              <Form>
                <form style={flexContainer}>
                  <TextField
                    inputProps={styles}
                    label={chart.trade_type}
                    value={chart.symbol}
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
                <img src={`data:image/png;base64,${chart.image}`} />
                <br />
                <TextField
                  inputProps={styles}
                  label="Note"
                  value={chart.note}
                  variant="outlined"
                  fullWidth
                  multiline={true}
                  rows={4}
                  rowsMax={10}
                />
                <form style={flexContainer}>
                  <TextField
                    inputProps={styles}
                    label={entry}
                    value={chart.entry_point}
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    inputProps={styles}
                    label={sell}
                    value={chart.sell_limit}
                    variant="outlined"
                    fullWidth
                  />
                  <TextField
                    inputProps={styles}
                    label={stop}
                    value={chart.stop_limit}
                    variant="outlined"
                    fullWidth
                  />
                </form>
                <br />
              </Form>
            </div>
          );
        }
      })}
    </List>
  );
};
