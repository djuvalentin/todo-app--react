import React from 'react';
import styles from './Card.module.css';

const Card = props => {
  const taskVariantCombinedClasses = [
    'col-md-7',
    'pb-3',
    'bg-light',
    'text-success',
  ];

  const listVatiantCombinedClasses = ['col-md-4'];

  const cardCombinedClasses = [
    'px-0',
    'my-4',
    'mx-auto',
    styles['custom-h-fit-content'],
    props.variant === 'task' && taskVariantCombinedClasses,
    props.variant === 'list' && listVatiantCombinedClasses,
  ]
    .flat()
    .join(' ');

  return <div className={cardCombinedClasses}>{props.children}</div>;
};

export default Card;
