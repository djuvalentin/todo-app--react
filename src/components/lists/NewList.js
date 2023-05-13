import React from 'react';
import InputForm from '../InputForm';

const NewList = props => {
  return <InputForm inputType="list" onAddNewList={props.onAddNewList} />;
};

export default NewList;
