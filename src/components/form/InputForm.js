import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import WrongInputAlert from './WrongInputAlert';
import SubmitButton from './SubmitButton';

import './InputForm.css';

const InputForm = props => {
  const wrapClassName = `input-group input-${props.inputType}`;

  const label = `Add new ${props.inputType}`;

  const [inputValue, setInputValue] = useState('');
  const [validTitleInput, setValidTitleInput] = useState(true);

  const addListChangeListener = e => {
    setInputValue(e.target.value);
  };

  // const validListTitle = () => {
  //   return !props.todoLists.some(
  //     list => list.toLowerCase() === inputValue.toLowerCase()
  //   );
  // };

  let validListTitle;

  const submitHandler = e => {
    e.preventDefault();

    if (!inputValue) return;

    if (props.inputType === 'list') {
      validListTitle = !props.todoLists?.some(
        list => list.toLowerCase() === inputValue.toLowerCase()
      );

      if (!validListTitle) return setValidTitleInput(false);

      props.onAddNewList(inputValue);
      setValidTitleInput(true);
    }

    if (props.inputType === 'task') props.onAddNewTask(inputValue);

    setInputValue('');
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className={wrapClassName}>
        <Form.Text className="input-group-text bg-transparent py-0 fs-1 lh-sm">
          +
        </Form.Text>
        <Form.Control
          className="bg-transparent"
          type="text"
          placeholder={label}
          aria-label={label}
          aria-describedby="button-addon2"
          value={inputValue}
          onChange={addListChangeListener}
        />
        <SubmitButton inputValue={inputValue} inputType={props.inputType} />
      </Form.Group>
      {props.inputType === 'list' ? (
        <WrongInputAlert show={!validTitleInput} />
      ) : (
        ''
      )}
    </Form>
  );
};

export default InputForm;
