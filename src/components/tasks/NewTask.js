import React from 'react';
import InputFrom from '../InputForm';

const NewTask = props => {
  return <InputFrom onAddNewTask={props.onAddNewTask} inputType="task" />;
};

export default NewTask;
