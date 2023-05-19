import React from 'react';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import './List.css';

const List = props => {
  const showList = function () {
    props.onShowList(props.title);
  };

  return (
    <ListGroupItem
      onClick={showList}
      as="li"
      className={
        'todo-list-item bg-transparent text-light d-flex justify-content-between' +
        (props.active ? ' active' : '')
      }
    >
      {props.title}
    </ListGroupItem>
  );
};

export default List;
