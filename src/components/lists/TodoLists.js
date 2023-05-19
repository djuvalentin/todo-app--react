import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import List from './List';

const TodoLists = props => {
  return (
    <ListGroup as="ul" className="todo-lists">
      {props.todoLists.map((list, i) => {
        return (
          <List
            onShowList={props.onShowList}
            key={i}
            title={list}
            active={list === props.activeList}
          />
        );
      })}
    </ListGroup>
  );
};

export default TodoLists;
