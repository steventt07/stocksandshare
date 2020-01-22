import React from "react";

function StockNote(props) {
  return (
    <div className="stock-note">
      <img src={props.imgUrl} />
      <h3>{props.name}</h3>
      <p>{props.note}</p>
    </div>
  );
}

export default StockNote;
