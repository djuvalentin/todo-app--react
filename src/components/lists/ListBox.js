import React from 'react';
import TodoLists from './TodoLists';
import NewList from './NewList';
import EmptyBoxMessage from '../EmptyBoxMessage';

const ListBox = props => {
  const boxEmpty = props.todoLists.length === 0;

  return (
    <div className="col-4 p-0 m-4">
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
