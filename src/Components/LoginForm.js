import React, { useState } from "react";
import { Form, Button } from "../../node_modules/semantic-ui-react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
//axios
const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  }
}));
export const LoginForm = () => {
  var proxy = "http://127.0.0.1:8000";
  var post_path = "/login";

  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

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
    document.getElementById("username-form").value = "";
    document.getElementById("first_name-form").value = "";
    document.getElementById("last_name-form").value = "";
  };
  function validateFields() {
    if (
      document.getElementById("username-form").value === "" ||
      document.getElementById("first_name-form").value === "" ||
      document.getElementById("last_name-form").value === ""
    ) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <Form>
      <br />
      <TextField
        inputProps={styles}
        id="username-form"
        label="Username"
        value={username}
        variant="outlined"
        fullWidth
        onChange={e => setUsername(e.target.value)}
      />
      <TextField
        inputProps={styles}
        id="first_name-form"
        label="First Name"
        value={first_name}
        variant="outlined"
        fullWidth
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        inputProps={styles}
        id="last_name-form"
        label="Last Name"
        value={last_name}
        variant="outlined"
        fullWidth
        onChange={e => setLastName(e.target.value)}
      />
      <form style={flexContainer}>
        <Button
          style={{ width: "100%", height: "40px" }}
          onClick={async () => {
            if (validateFields()) {
              console.log(username, first_name, last_name);
              const login = {
                username,
                first_name,
                last_name
              };
              const response = await fetch(proxy.concat(post_path), {
                method: "POST",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(login)
              });

              if (response.ok) {
                console.log("response worked!!");
                setUsername("");
                setFirstName("");
                setLastName("");
                clearText();
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
