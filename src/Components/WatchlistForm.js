import React, { useState } from "react";
import { Form } from "../../node_modules/semantic-ui-react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

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
  const [username, setUsername] = useState("");
  const [image_name, setImageName] = useState("");
  const [image_type, setImageType] = useState("");
  const [openInvalidUser, setOpenInvalidUser] = React.useState(false);
  const [openInvalidForm, setOpenInvalidForm] = React.useState(false);

  const handleClickOpenInvalidUser = () => {
    setOpenInvalidUser(true);
  };

  const handleClickOpenInvalidForm = () => {
    setOpenInvalidForm(true);
  };

  const handleCloseInvalidUser = () => {
    setOpenInvalidUser(false);
  };

  const handleCloseInvalidForm = () => {
    setOpenInvalidForm(false);
  };

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
                  username,
                  image_name,
                  image_type
                );
                const chart = {
                  image,
                  note,
                  symbol,
                  username,
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
              } else {
                handleClickOpenInvalidUser();
              }
            } else {
              handleClickOpenInvalidForm();
            }
          }}
        >
          submit
        </Button>
        <Dialog
          open={openInvalidUser}
          onClose={handleCloseInvalidUser}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Invalid Username"}
          </DialogTitle>
          <DialogActions>
            <Button onClick={handleCloseInvalidUser} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={openInvalidForm}
          onClose={handleCloseInvalidForm}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Invalid Form"}</DialogTitle>
          <DialogActions>
            <Button onClick={handleCloseInvalidForm} color="primary" autoFocus>
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </Form>
  );
};
