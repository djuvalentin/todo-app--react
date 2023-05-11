import React, { useState } from "react";
import "./InputField.css";

const InputField = (props) => {
  const label = `Add new ${props.inputType}`;

  const [newListTitle, setNewListTitle] = useState("");

  const clearInputField = () => {
    setNewListTitle("");
  };

  const addListChangeListener = (e) => {
    setNewListTitle(e.target.value);

    props.onGetInputValue(e.target.value);
    props.onGetClearInputFunction(clearInputField);
  };

  return (
    <input
      value={newListTitle}
      onChange={addListChangeListener}
      type="text"
      className="form-control bg-transparent"
      placeholder={label}
      aria-label={label}
      aria-describedby="button-addon2"
    />
  );
};

export default InputField;
