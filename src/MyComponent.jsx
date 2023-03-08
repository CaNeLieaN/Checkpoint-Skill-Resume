import React from "react";
import "./App.css";

export function HeaderText(props) {
  return (
    <div className="headertext">
      <p>{props.text}</p>
    </div>
  );
}

export function LeftBox(props) {
  return (
    <div className="leftbox">
      <p>{props.lpanel}</p>
    </div>
  );
}

export function RightBox(props) {
  return (
    <div className="rightbox">
      <p>{props.rpanel}</p>
    </div>
  );
}
