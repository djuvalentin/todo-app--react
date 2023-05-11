import React from "react";
import InputForm from "../input-form/InputForm";

const NewList = (props) => {
  return <InputForm inputType="list" onAddNewList={props.onAddNewList} />;
};

export default NewList;
