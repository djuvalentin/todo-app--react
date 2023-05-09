import React from "react";
import "./InputField.css";

const InputField = (props) => {
  const label = `Add new ${props.inputType}`;
  return (
    <input
      type="text"
      className="form-control bg-transparent text-light"
      placeholder={label}
      aria-label={label}
      aria-describedby="button-addon2"
    />
  );
};

export default InputField;
