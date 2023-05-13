import React, { useState } from 'react';
import './InputForm.css';

const InputForm = props => {
  const wrapClassName = `input-group input-${props.inputType}`;

  const label = `Add new ${props.inputType}`;

  const [inputValue, setInputValue] = useState('');

  const addListChangeListener = e => {
    setInputValue(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    if (!inputValue) return;

    if (props.inputType === 'list') props.onAddNewList(inputValue);
    if (props.inputType === 'task') props.onAddNewTask(inputValue);

    setInputValue('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={wrapClassName}>
        <span className="input-group-text bg-transparent py-0 fs-1 lh-sm">
          +
        </span>
        <input
          value={inputValue}
          onChange={addListChangeListener}
          type="text"
          className="form-control bg-transparent"
          placeholder={label}
          aria-label={label}
          aria-describedby="button-addon2"
        />
      </div>
    </form>
  );
};

export default InputForm;
