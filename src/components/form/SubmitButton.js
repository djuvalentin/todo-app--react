import React from 'react';
import Button from 'react-bootstrap/Button';

const SubmitButton = props => {
  return (
    <Button
      type="submit"
      className={props.inputValue ? '' : 'd-none'}
      variant={props.inputType === 'list' ? 'outline-light' : 'outline-success'}
    >
      Add
    </Button>
  );
};

export default SubmitButton;
