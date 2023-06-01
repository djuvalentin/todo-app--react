import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import WrongInputAlert from './WrongInputAlert';
import SubmitButton from './SubmitButton';

import styles from './InputForm.module.css';

const InputForm = props => {
  //CLASSES
  const wrapCombinedClasses = [
    'w-75',
    'input-group',
    styles['max-width-20rem'],
  ].join(' ');
  const textCombinedClasses = [
    'input-group-text',
    'border-0',
    'bg-transparent',
    'py-0',
    'fs-1',
    'lh-sm',
    props.inputType === 'list' ? 'text-light' : 'text-success',
  ].join(' ');
  const controlCombinedClasses = [
    'bg-transparent',
    'shadow-none',
    'border-0',
    'border-bottom',
    props.inputType === 'list'
      ? 'text-light border-light'
      : 'text-success border-success',
  ].join(' ');

  //STATE
  const inputFieldLabel = `Add new ${props.inputType}`;

  const [inputValue, setInputValue] = useState('');
  const [validTitleInput, setValidTitleInput] = useState(true);

  const addInputChangeListener = e => {
    setInputValue(e.target.value);
    setValidTitleInput(true);
  };

  //DATA VALIDATION
  let validListTitle;

  const submitHandler = e => {
    e.preventDefault();

    const newListTitle = inputValue.trim();

    if (!newListTitle) return;

    if (props.inputType === 'list') {
      validListTitle = !props.todoLists?.some(
        list => list.toLowerCase() === newListTitle.toLowerCase()
      );

      if (!validListTitle) return setValidTitleInput(false);

      props.onAddNewList(newListTitle);
      setValidTitleInput(true);
    }

    if (props.inputType === 'task') props.onAddNewTask(newListTitle);

    setInputValue('');
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className={wrapCombinedClasses}>
        <Form.Text className={textCombinedClasses}>+</Form.Text>
        <Form.Control
          className={controlCombinedClasses}
          type="text"
          placeholder={inputFieldLabel}
          aria-label={inputFieldLabel}
          aria-describedby="button-addon2"
          value={inputValue}
          onChange={addInputChangeListener}
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
