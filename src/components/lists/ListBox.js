import React from 'react';
import TodoLists from './TodoLists';
import NewList from './NewList';
import EmptyBoxMessage from '../EmptyBoxMessage';
import './ListBox.css';

const ListBox = props => {
  const boxEmpty = props.todoLists.length === 0;

  return (
    <div className="list-box col-md-4 p-0 my-4 mx-auto">
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
