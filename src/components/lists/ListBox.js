import React from 'react';
import Card from '../UI/Card';
import TodoLists from './TodoLists';
import NewList from './NewList';
import EmptyBoxMessage from '../UI/EmptyBoxMessage';

const ListBox = props => {
  const boxEmpty = props.todoLists.length === 0;
  const headingCombinedClasses = ['text-center', 'border'].join(' ');

  return (
    <Card variant="list">
      <h2 className={headingCombinedClasses}>Lists</h2>
      <EmptyBoxMessage
        message="Start by creating a new list below:"
        show={boxEmpty}
      />
      <TodoLists
        onShowList={props.onShowList}
        onAddNewList={props.onAddNewList}
        todoLists={props.todoLists}
        activeList={props.activeList}
      />
      <NewList onAddNewList={props.onAddNewList} todoLists={props.todoLists} />
    </Card>
  );
};

export default ListBox;
