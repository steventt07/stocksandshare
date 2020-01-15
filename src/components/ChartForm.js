import React, { useState } from "react";

import { Form, Input, Button } from "semantic-ui-react";
export const ChartForm = () => {
  const [image, setImage] = useState("");
  const [note, setNote] = useState("");
  const [symbol, setSymbol] = useState("");
  return (
    <Form>
      <Form.Field>
        <Input
          placeholder="image"
          value={image}
          onChange={e => setImage(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          placeholder="Note"
          value={note}
          onChange={e => setNote(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Input
          placeholder="stock symbol"
          value={symbol}
          onChange={e => setSymbol(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Button
          onClick={async () => {
            const chart = { image, note, symbol };
            const response = await fetch("http://127.0.0.1:8000/charts", {
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
            }
          }}
        >
          submit
        </Button>
      </Form.Field>
    </Form>
  );
};
