import React, { useState } from "react";
import { Form } from "../../node_modules/semantic-ui-react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Link } from "../../node_modules/react-router-dom";
//axios
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));
export const ExitForm = ({ params }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log(params);
  // var proxy = "http://127.0.0.1:8000";
  var proxy = "";
  var post_path = "/exit";
  const trade_id = params.trade_id;
  const symbol = params.symbol;
  const [image, setImage] = useState("");
  const [exit_price, setExitPrice] = useState("");
  const [note, setNote] = useState("");
  //   placeholder values, will get values from props and file information
  const [image_name, setImageName] = useState("AMD");
  const [image_type, setImageType] = useState("PGN");
  const [username, setUsername] = useState("");
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
    document.getElementById("exit_price-form").value = "";
    document.getElementById("note-form").value = "";
  };
  function validateFields() {
    if (
      document.getElementById("file-form").value === "" ||
      document.getElementById("exit_price-form").value === "" ||
      document.getElementById("note-form").value === ""
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
        label="Symbol"
        value={trade_id}
        variant="outlined"
        fullWidth
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
        <TextField
          inputProps={styles}
          id="exit_price-form"
          label="Exit Price"
          value={exit_price}
          variant="outlined"
          fullWidth
          onChange={e => setExitPrice(e.target.value)}
        />
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
      <form style={flexContainer}>
        <Button
          style={{ width: "100%", height: "40px" }}
          variant="contained"
          color="primary"
          onClick={async () => {
            if (validateFields()) {
              console.log(
                image,
                exit_price,
                note,
                image_name,
                image_type,
                username,
                trade_id,
                symbol
              );
              const login = {
                image,
                exit_price,
                note,
                image_name,
                image_type,
                username,
                trade_id,
                symbol
              };
              const response = await fetch(proxy.concat(post_path), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(login)
              });

              if (response.ok) {
                handleClickOpen();
              }
            } else {
              console.log("Invalid Form");
            }
          }}
        >
          submit
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Upload of exit trade complete"}
          </DialogTitle>
          <DialogActions>
            <Button
              onClick={handleClose}
              color="primary"
              component={Link}
              to="/trader"
              autoFocus
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </form>
    </Form>
  );
};
