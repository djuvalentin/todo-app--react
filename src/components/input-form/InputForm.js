import React from "react";
import InputField from "./InputField";
import InputGroupText from "./InputGroupText";
import "./InputForm.css";

const InputForm = (props) => {
  return (
    <form>
      <div className="input-group">
        <InputGroupText />
        <InputField inputType={props.inputType} />
      </div>
    </form>
  );
};

export default InputForm;
