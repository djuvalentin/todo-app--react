import React from 'react';
import InputFrom from '../form/InputForm';

const NewTask = props => {
  return <InputFrom onAddNewTask={props.onAddNewTask} inputType="task" />;
};

export default NewTask;
