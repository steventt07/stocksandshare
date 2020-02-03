import React from "react";
import { List } from "../../node_modules/semantic-ui-react";
import { Form } from "../../node_modules/semantic-ui-react";
import TextField from "@material-ui/core/TextField";

export const Watchlist = ({ charts }) => {
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
              <form style={flexContainer}>
                <TextField
                  inputProps={styles}
                  label="WATCHLIST"
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
      })}
    </List>
  );
};
