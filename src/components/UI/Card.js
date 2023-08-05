import React from 'react';
import styles from './Card.module.css';

export default function Card({ variant, children }) {
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
    variant === 'task' && taskVariantCombinedClasses,
    variant === 'list' && listVatiantCombinedClasses,
  ]
    .flat()
    .join(' ');

  return <div className={cardCombinedClasses}>{children}</div>;
}
