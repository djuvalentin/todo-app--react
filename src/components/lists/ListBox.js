import React from 'react';
import TodoLists from './TodoLists';
import NewList from './NewList';
import EmptyBoxMessage from '../EmptyBoxMessage';
import styles from '../UI/Box.module.css';

const ListBox = props => {
  const boxCombinedClasses = [
    'col-md-4',
    'p-0',
    'my-4',
    'mx-auto',
    styles['custom-h-fit-content'],
  ].join(' ');

  const boxEmpty = props.todoLists.length === 0;

  return (
    <div className={boxCombinedClasses}>
      <h2 className="text-center border">Lists</h2>
      <EmptyBoxMessage container="lists" show={boxEmpty} />
      <TodoLists
        onShowList={props.onShowList}
        onAddNewList={props.onAddNewList}
        todoLists={props.todoLists}
        activeList={props.activeList}
      />
      <NewList onAddNewList={props.onAddNewList} todoLists={props.todoLists} />
    </div>
  );
};

export default ListBox;
