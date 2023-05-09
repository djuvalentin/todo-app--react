import React from "react";
import TodoLists from "./TodoLists";
import NewList from "./NewList";

const ListsBox = () => {
  return (
    <div className="col-4 p-0 m-4">
      <h2 className="text-center border">Lists</h2>
      <TodoLists />
      <NewList />
    </div>
  );
};

export default ListsBox;
