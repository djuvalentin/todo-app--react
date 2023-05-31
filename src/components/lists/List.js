import React from 'react';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import styles from './List.module.css';

const List = props => {
  const listCombinedClasses = [
    'border-0',
    'bg-transparent',
    'text-light',
    'd-flex',
    'justify-content-between',
    'btn',
    'cursor-pointer',
    styles['custom-transition'],
    props.active && styles.active,
  ];

  const showList = function () {
    props.onShowList(props.title);
  };

  return (
    <ListGroupItem onClick={showList} as="li" className={listCombinedClasses}>
      {props.title}
    </ListGroupItem>
  );
};

export default List;
