import React from "react";
import List from "./List";

const TodoLists = (props) => {
  return (
    <ul className="todo-lists">
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
    </ul>
  );
};

export default TodoLists;
