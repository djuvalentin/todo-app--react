import React from "react";
import InputFrom from "../input-form/InputForm";

const NewTask = (props) => {
  return <InputFrom inputType={props.inputType} />;
};

export default NewTask;
