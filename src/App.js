import React, { useState } from 'react';
import ListBox from './components/lists/ListBox';
import TaskBox from './components/tasks/TaskBox';
import './MediaQuery.css';

const DUMMY_DATA = {
  Work: [
    { id: '01', title: 'Analytics', done: false },
    { id: '02', title: 'Statistics', done: false },
    { id: '03', title: 'Work Task 3', done: false },
    { id: '04', title: 'Work Task 4', done: false },
  ],
  Grociery: [
    { id: '11', title: 'Bananas', done: false },
    { id: '12', title: 'Toilet Paper', done: false },
    { id: '13', title: 'Toothbrush', done: false },
    { id: '14', title: 'Toothpaste', done: false },
  ],
  Home: [
    { id: '21', title: 'Clean House', done: false },
    { id: '22', title: 'Pay rent', done: false },
    { id: '23', title: 'Home Task 3', done: false },
    { id: '24', title: 'Home Task 4', done: false },
  ],
  Other: [
    { id: '31', title: 'Other 1', done: true },
    { id: '32', title: 'Other 2', done: false },
    { id: '33', title: 'Other 3', done: true },
    { id: '34', title: 'Other 4', done: false },
  ],
};

function App() {
  // ToDos //
  const [todos, setTodos] = useState(DUMMY_DATA);
  const [activeList, setActiveList] = useState('Work');
  const lists = Object.keys(todos);
  const tasks = todos[activeList];

  // const [tasks, setTasks] = useState(todos[activeList]);

  const showListHandler = listTitle => {
    setActiveList(listTitle);
  };

  const addNewListHandler = listTitle => {
    setTodos(prevTodos => {
      const cloneTodos = JSON.parse(JSON.stringify(prevTodos));
      cloneTodos[listTitle] = [];

      setActiveList(listTitle);

      return cloneTodos;
    });
  };

  const addNewTaskHandler = taskTitle => {
    const newTask = {
      id: `${Date.now()}`,
      title: taskTitle,
      done: false,
    };

    setTodos(prevTodos => {
      const cloneTodos = JSON.parse(JSON.stringify(prevTodos));
      cloneTodos[activeList].push(newTask);

      return cloneTodos;
    });
  };

  const toggleCrossOffHandler = taskID => {
    setTodos(prevTodos => {
      const cloneTodos = JSON.parse(JSON.stringify(prevTodos));
      const toggledTask = cloneTodos[activeList].find(
        task => task.id === taskID
      );

      if (toggledTask.done) toggledTask.done = false;
      else toggledTask.done = true;

      return cloneTodos;
    });
  };

  const deleteListHandler = listName => {
    setTodos(prevTodos => {
      const cloneTodos = JSON.parse(JSON.stringify(prevTodos));

      delete cloneTodos[listName];

      setActiveList(Object.keys(cloneTodos)[0]);

      return cloneTodos;
    });
  };

  const deleteTaskHandler = taskID => {
    setTodos(prevTodos => {
      const cloneTodos = JSON.parse(JSON.stringify(prevTodos));
      const itemIndex = cloneTodos[activeList].findIndex(
        task => task.id === taskID
      );
      cloneTodos[activeList].splice(itemIndex, 1);

      return cloneTodos;
    });
  };

  const appContainerCombinedClasses = [
    'bg-success',
    'bg-gradient',
    'vh-100',
    'text-light',
    'pt-5',
  ].join(' ');

  return (
    <div className={appContainerCombinedClasses}>
      <h1 className="text-center">To Do App</h1>
      <div className="container">
        <div className="row">
          <ListBox
            onShowList={showListHandler}
            onAddNewList={addNewListHandler}
            todoLists={lists}
            activeList={activeList}
          />
          <TaskBox
            onDeleteList={deleteListHandler}
            onDeleteTask={deleteTaskHandler}
            onAddNewTask={addNewTaskHandler}
            onToggleCrossOff={toggleCrossOffHandler}
            listTasks={tasks}
            activeList={activeList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

// TODO
// DONE refactor for css modules
// DONE Try to separate components into a UI folder (buttons, icons, modal etc)
// DONE Refactor modal with custom prompt object properties for each prompt
// DONE Take the modal out of App.js and render it on each component that will trigger it individually if the propmpt object exists
// DONE Make the invalid input message disappear when making a change to the input
