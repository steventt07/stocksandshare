import React, { useState } from "react";
import { Form } from "../../node_modules/semantic-ui-react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));
export const WatchlistForm = () => {
  // var proxy = "http://127.0.0.1:8000";
  var proxy = "";
  var post_path = "/watchlist";
  var user1 = "steventt07";
  var user2 = "cheten1234";

  const [image, setImage] = useState("");
  const [note, setNote] = useState("");
  const [symbol, setSymbol] = useState("");
  const [entry_point, setEntryPoint] = useState(0);
  const [stop_limit, setStopLimit] = useState(0);
  const [sell_limit, setSellLimit] = useState(0);
  const [username, setUsername] = useState("");
  const [trade_type, setTradeType] = useState("WATCHLIST");
  const [image_name, setImageName] = useState("AMD");
  const [image_type, setImageType] = useState("PGN");

  const styles = { style: { textAlign: "center" } };
  const flexContainer = {
    display: "flex",
    flexDirection: "row"
  };
  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",").pop());
      reader.onerror = error => reject(error);
    });
  };
  const clearText = () => {
    document.getElementById("file-form").value = "";
    document.getElementById("note-form").value = "";
    document.getElementById("symbol-form").value = "";
    document.getElementById("username-form").value = "";
  };
  function validateFields() {
    if (
      document.getElementById("file-form").value === "" ||
      document.getElementById("note-form").value === "" ||
      document.getElementById("symbol-form").value === ""
    ) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <Form>
      <TextField
        inputProps={styles}
        id="symbol-form"
        label="Stock Symbol"
        value={symbol}
        variant="outlined"
        fullWidth
        onChange={e => setSymbol(e.target.value)}
      />
      <TextField
        inputProps={styles}
        id="note-form"
        label="Note"
        value={note}
        multiline={true}
        rows={4}
        rowsMax={10}
        variant="outlined"
        fullWidth
        onChange={e => setNote(e.target.value)}
      />
      <form style={flexContainer}>
        <Button variant="outlined" component="label" style={{ width: "100%" }}>
          <input
            id="file-form"
            type="file"
            onChange={e =>
              getBase64(e.target.files[0]).then(result => {
                setImage(result);
              })
            }
          />
        </Button>
        <TextField
          inputProps={styles}
          id="username-form"
          label="Username"
          value={username}
          variant="outlined"
          fullWidth
          onChange={e => setUsername(e.target.value)}
        />
      </form>
      <form style={flexContainer}>
        <Button
          style={{ width: "100%", height: "40px" }}
          variant="contained"
          color="primary"
          onClick={async () => {
            if (validateFields()) {
              if (username == user1 || username == user2) {
                console.log("invald user");
                console.log(
                  image,
                  note,
                  symbol,
                  entry_point,
                  sell_limit,
                  stop_limit,
                  username,
                  trade_type,
                  image_name,
                  image_type
                );
                const chart = {
                  image,
                  note,
                  symbol,
                  entry_point,
                  sell_limit,
                  stop_limit,
                  username,
                  trade_type,
                  image_name,
                  image_type
                };
                const response = await fetch(proxy.concat(post_path), {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(chart)
                });

                if (response.ok) {
                  console.log("response worked!!");
                  setNote("");
                  setSymbol("");
                  setImage("");
                  setUsername("");
                  clearText();
                }
              }
            } else {
              console.log("Invalid Form");
            }
          }}
        >
          submit
        </Button>
      </form>
    </Form>
  );
};
