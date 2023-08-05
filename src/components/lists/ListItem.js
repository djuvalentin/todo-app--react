import React from 'react';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import styles from './ListItem.module.css';

export default function ListItem({ active, title, onSelectList }) {
  const listCombinedClasses = [
    'border-0',
    'bg-transparent',
    'text-light',
    'd-flex',
    'justify-content-between',
    'btn',
    'cursor-pointer',
    styles['custom-transition'],
    active && styles.active,
  ];

  return (
    <ListGroupItem
      onClick={() => onSelectList(title)}
      as="li"
      className={listCombinedClasses}
    >
      {title}
    </ListGroupItem>
  );
}
