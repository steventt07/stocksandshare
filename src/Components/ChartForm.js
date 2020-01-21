import React, { useState } from "react";
import { Form, Input, Button } from "../../node_modules/semantic-ui-react";
import { useAlert } from "react-alert";
//axios

export const ChartForm = () => {
  // const alert = useAlert();

  const [image, setImage] = useState("");
  const [note, setNote] = useState("");
  const [symbol, setSymbol] = useState("");
  const [entrypoint, setEntryoint] = useState("");
  const [stopLimit, setStopLimit] = useState("");
  const [sellLimit, setSellLimit] = useState("");
  const [username, setUsername] = useState("");

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
    document.getElementById("entrypoint-form").value = "";
    document.getElementById("sellLimit-form").value = "";
    document.getElementById("sellLimit-form").value = "";
    document.getElementById("username-form").value = "";
  };
  function validateFields() {
    if (
      document.getElementById("file-form").value === "" ||
      document.getElementById("note-form").value === "" ||
      document.getElementById("symbol-form").value === "" ||
      document.getElementById("entrypoint-form").value === "" ||
      document.getElementById("sellLimit-form").value === "" ||
      document.getElementById("sellLimit-form").value === ""
    ) {
      return false;
    } else {
      return true;
    }
  }
  return (
    <Form>
      <Form.Field>
        <Input
          id="file-form"
          type="file"
          onChange={e =>
            getBase64(e.target.files[0]).then(result => {
              setImage(result);
            })
          }
        />
      </Form.Field>
      <Form.Field>
        <Input
          id="note-form"
          placeholder="note"
          value={note}
          onChange={e => setNote(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          id="symbol-form"
          placeholder="stock symbol"
          value={symbol}
          onChange={e => setSymbol(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          id="entrypoint-form"
          placeholder="entrypoint"
          value={entrypoint}
          onChange={e => setEntryoint(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          id="stopLimit-form"
          placeholder="stop limit"
          value={stopLimit}
          onChange={e => setStopLimit(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          id="sellLimit-form"
          placeholder="sell limit"
          value={sellLimit}
          onChange={e => setSellLimit(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          id="username-form"
          placeholder="username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Button
          onClick={async () => {
            if (validateFields()) {
              if (username == "steventt07" || username == "cheten1234") {
                console.log("invald user");
                console.log(
                  image,
                  note,
                  symbol,
                  entrypoint,
                  sellLimit,
                  stopLimit,
                  username
                );
                const chart = {
                  image,
                  note,
                  symbol,
                  entrypoint,
                  sellLimit,
                  stopLimit,
                  username
                };
                const response = await fetch("/charts", {
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
                  setEntryoint("");
                  setStopLimit("");
                  setSellLimit("");
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
      </Form.Field>
    </Form>
  );
};
