import React from "react";
import TodoLists from "./TodoLists";
import NewList from "./NewList";

const ListsBox = (props) => {
  return (
    <div className="col-4 p-0 m-4">
      <h2 className="text-center border">Lists</h2>
      <TodoLists
        onShowList={props.onShowList}
        onAddNewList={props.onAddNewList}
        todoLists={props.todoLists}
        activeList={props.activeList}
      />
      <NewList onAddNewList={props.onAddNewList} />
    </div>
  );
};

export default ListsBox;
