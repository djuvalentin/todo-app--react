import React from "react";
import InputField from "./InputField";
import InputGroupText from "./InputGroupText";
import "./InputForm.css";

const InputForm = (props) => {
  const className = `input-group input-${props.inputType}`;

  let newListTitle;
  let clearInputField;

  const getInputValueHandler = (value) => {
    newListTitle = value;
  };

  const getClearInputFunctionHandler = (func) => {
    clearInputField = func;
  };

  const createNewList = (e) => {
    e.preventDefault();
    props.onAddNewList(newListTitle);
    clearInputField();
  };

  return (
    <form onSubmit={createNewList}>
      <div className={className}>
        <InputGroupText />
        <InputField
          inputType={props.inputType}
          onGetInputValue={getInputValueHandler}
          onGetClearInputFunction={getClearInputFunctionHandler}
        />
      </div>
    </form>
  );
};

export default InputForm;
