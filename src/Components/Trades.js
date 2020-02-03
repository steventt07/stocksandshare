import React from "react";
import { List } from "../../node_modules/semantic-ui-react";
import { Form } from "../../node_modules/semantic-ui-react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "../../node_modules/react-router-dom";
import { format } from "string-format";

export const Trades = ({ charts }) => {
  const styles = { style: { textAlign: "center" } };
  // const format = require("string-format");
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
        if (chart.trade_type == "LONG") {
          entry = "Entry Price";
          sell = "Sell Limit";
          stop = "Stop Limit";
        } else if (chart.trade_type == "SHORT") {
          entry = "Sell Price";
          sell = "Cover Limit";
          stop = "Stop Limit";
        }
        if (chart.exit_price != null) {
          return (
            <div className="box-1">
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
                      value={chart.entry_date_created}
                      variant="outlined"
                      fullWidth
                    />
                  </form>
                  <br />
                  <img src={`data:image/png;base64,${chart.entry_note}`} />
                  <br />
                  <TextField
                    inputProps={styles}
                    label="Note"
                    value={chart.entry_note}
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
                      value={chart.entry_price}
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
              <div className="box-1">
                <Form>
                  <form style={flexContainer}>
                    <TextField
                      inputProps={styles}
                      label="Exit Price"
                      value={chart.exit_price}
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      inputProps={styles}
                      label="Date Created"
                      value={chart.exit_date_created}
                      variant="outlined"
                      fullWidth
                    />
                  </form>
                  <br />
                  <img src={`data:image/png;base64,${chart.exit_image}`} />
                  <br />
                  <TextField
                    inputProps={styles}
                    label="Note"
                    value={chart.exit_note}
                    variant="outlined"
                    fullWidth
                    multiline={true}
                    rows={4}
                    rowsMax={10}
                  />
                  <br />
                </Form>
              </div>
            </div>
          );
        } else {
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
                    value={chart.entry_date_created}
                    variant="outlined"
                    fullWidth
                  />
                </form>
                <br />
                <img src={`data:image/png;base64,${chart.entry_note}`} />
                <br />
                <TextField
                  inputProps={styles}
                  label="Note"
                  value={chart.entry_note}
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
                    value={chart.entry_price}
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
                  <Button
                    variant="contained"
                    color="primary"
                    component={Link}
                    to={`/exit/${chart.trade_id}/${chart.symbol}`}
                  >
                    Exit
                  </Button>
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
