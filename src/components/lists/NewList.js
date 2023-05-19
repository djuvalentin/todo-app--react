import React from 'react';
import InputForm from '../form/InputForm';

const NewList = props => {
  return (
    <InputForm
      inputType="list"
      onAddNewList={props.onAddNewList}
      todoLists={props.todoLists}
    />
  );
};

export default NewList;
