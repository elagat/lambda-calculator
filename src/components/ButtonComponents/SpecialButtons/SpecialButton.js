import React, {useState} from "react";

const SpecialButton = (props) => {
  return (
    <button>{props.special.char}</button>
  );
};

export default SpecialButton;
