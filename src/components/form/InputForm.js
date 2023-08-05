import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import WrongInputAlert from './WrongInputAlert';

import styles from './InputForm.module.css';

export default function InputForm({
  inputType,
  lists,
  onAddNewList,
  onAddNewTask,
}) {
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
    inputType === 'list' ? 'text-light' : 'text-success',
  ].join(' ');
  const controlCombinedClasses = [
    'bg-transparent',
    'shadow-none',
    'border-0',
    'border-bottom',
    inputType === 'list'
      ? 'text-light border-light'
      : 'text-success border-success',
  ].join(' ');

  //STATE
  const inputFieldLabel = `Add new ${inputType}`;

  const [inputValue, setInputValue] = useState('');
  const [isValidInput, setIsValidInput] = useState(true);

  //DATA VALIDATION
  let isValidListTitle;

  function submitHandler(e) {
    e.preventDefault();

    const newListTitle = inputValue.trim();

    if (!newListTitle) return;

    if (inputType === 'list') {
      isValidListTitle = !lists?.some(
        list => list.toLowerCase() === newListTitle.toLowerCase()
      );

      if (!isValidListTitle) return setIsValidInput(false);

      onAddNewList(newListTitle);
      setIsValidInput(true);
    }

    if (inputType === 'task') onAddNewTask(newListTitle);

    setInputValue('');
  }

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
          onChange={e => {
            setInputValue(e.target.value);
            setIsValidInput(true);
          }}
        />
        <Button
          type="submit"
          className={inputValue ? '' : 'd-none'}
          variant={inputType === 'list' ? 'outline-light' : 'outline-success'}
        >
          Add
        </Button>
      </Form.Group>
      {inputType === 'list' ? <WrongInputAlert show={!isValidInput} /> : ''}
    </Form>
  );
}
