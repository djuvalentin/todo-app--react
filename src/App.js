import React, { useState } from "react";
import ListsBox from "./components/lists/ListsBox";
import TasksBox from "./components/tasks/TasksBox";

// const lists = [
//   { id: "001", title: "Work" },
//   { id: "002", title: "Home" },
//   { id: "003", title: "Grocery" },
//   { id: "004", title: "Other" },
// ];

// const tasks = [{ id: "001", title: "Banana", list: "" }];

const initialData = {
  Work: [
    { id: "001", title: "Analytics", done: false },
    { id: "002", title: "Statistics", done: false },
    { id: "003", title: "WorkTask 3", done: false },
    { id: "004", title: "WorkTask 3", done: false },
  ],
  Grociery: [
    { id: "001", title: "Bananas", done: false },
    { id: "002", title: "Toilet Paper", done: false },
    { id: "003", title: "Toothbrush", done: false },
    { id: "004", title: "Toothpaste", done: false },
  ],
  Home: [
    { id: "001", title: "Clean House", done: false },
    { id: "002", title: "Pay rent", done: false },
    { id: "003", title: "HomeTask 3", done: false },
    { id: "004", title: "HomeTask 4", done: false },
  ],
  Other: [
    { id: "001", title: "Other 1", done: true },
    { id: "002", title: "Other 2", done: false },
    { id: "003", title: "Other 3", done: true },
    { id: "004", title: "Other 4", done: false },
  ],
};

function App() {
  const [todos, setTodos] = useState(initialData);

  const lists = Object.keys(todos);

  const [activeList, setActiveList] = useState("Work");

  const tasks = todos[activeList];

  // const [tasks, setTasks] = useState(todos[activeList]);

  const showListHandler = (listTitle) => {
    setActiveList(listTitle);
  };

  const addNewListHandler = (listTitle) => {
    setTodos((prevTodos) => {
      const cloneTodos = JSON.parse(JSON.stringify(prevTodos));
      cloneTodos[listTitle] = [];

      return cloneTodos;
    });
  };

  const toggleCrossOffHandler = (taskID) => {
    setTodos((prevTodos) => {
      const cloneTodos = JSON.parse(JSON.stringify(prevTodos));
      const toggledTask = cloneTodos[activeList].find(
        (task) => task.id === taskID
      );

      if (toggledTask.done) toggledTask.done = false;
      else toggledTask.done = true;

      return cloneTodos;
    });
  };

  return (
    <div className="bg-success bg-gradient vh-100 text-light pt-5">
      <h1 className="text-center">To Do App</h1>
      <div className="container">
        <div className="row">
          <ListsBox
            onShowList={showListHandler}
            onAddNewList={addNewListHandler}
            todoLists={lists}
            activeList={activeList}
          />
          <TasksBox
            onToggleCrossOff={toggleCrossOffHandler}
            listTasks={tasks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
