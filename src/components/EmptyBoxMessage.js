import React from 'react';

const EmptyBoxMessage = props => {
  let message;

  let EmptyBoxMessageClassName = `${
    props.show ? '' : 'd-none'
  } m-0 fs-2 p-2 fw-light`;

  if (props.container === 'lists') {
    message = 'Start by creating a new list below:';
  } else if (props.container === 'tasks') {
    EmptyBoxMessageClassName += ' ms-4';
    message = 'No tasks yet...';
  }

  return <p className={EmptyBoxMessageClassName}>{message}</p>;
};

export default EmptyBoxMessage;
