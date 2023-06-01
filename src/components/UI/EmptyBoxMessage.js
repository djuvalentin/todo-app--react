import React from 'react';

const EmptyBoxMessage = props => {
  const messageCombinedClasses = [
    'my-0',
    'mx-4',
    'p-2',
    'fw-light',
    props.fontSize ? `fs-${props.fontSize}` : 'fs-3',
    !props.show && 'd-none',
  ].join(' ');

  return <p className={messageCombinedClasses}>{props.message}</p>;
};

export default EmptyBoxMessage;
