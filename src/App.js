import React from "react";
import ListsBox from "./components/lists/ListsBox";
import TasksList from "./components/tasks/TasksBox";

function App() {
  return (
    <div className="bg-success bg-gradient vh-100 text-light pt-5">
      <h1 className="text-center">To Do App</h1>
      <div className="container">
        <div className="row">
          <ListsBox />
          <TasksList />
        </div>
      </div>
    </div>
  );
}

export default App;
