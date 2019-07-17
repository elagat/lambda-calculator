import React, {useState} from "react";

import {numbers} from "../../../data.js";

const NumberButton = (props) => {
  const [numberButtonState, setNumberButtonState] = useState(numbers);

  if (props.number === "0") {
    return <button className="zero" onClick = { (props) => console.log("hi") }>{props.number}</button>
  } else {
    return <button onClick = { (props) => console.log("bye") }>{props.number}</button>
  }

  // return <button onClick = { () => console.log("Hi")></button>
};

export default NumberButton;
