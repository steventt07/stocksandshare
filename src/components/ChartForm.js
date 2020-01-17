import React, { useState } from "react";
//axios
import { Form, Input, Button, Label, Icon } from "semantic-ui-react";
export const ChartForm = () => {
  const [image, setImage] = useState("");
  const [note, setNote] = useState("");
  const [symbol, setSymbol] = useState("");

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
  };
  function validateFields() {
    if (
      document.getElementById("file-form").value == "" ||
      document.getElementById("file-form").value == "" ||
      document.getElementById("file-form").value == ""
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
        <Button
          onClick={async () => {
            if (validateFields()) {
              console.log(image, note, symbol);
              const chart = { image, note, symbol };
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
                clearText();
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
