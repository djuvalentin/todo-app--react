import React from 'react';

export default function EmptyCardMessage({ fontSize, show, message }) {
  const messageCombinedClasses = [
    'my-0',
    'mx-4',
    'p-2',
    'fw-light',
    fontSize ? `fs-${fontSize}` : 'fs-3',
    !show && 'd-none',
  ].join(' ');

  return <p className={messageCombinedClasses}>{message}</p>;
}
