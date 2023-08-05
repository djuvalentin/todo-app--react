import React, { useState } from 'react';
import ListsCard from './components/lists/ListsCard';
import TasksCard from './components/tasks/TasksCard';
import ModalDelete from './components/UI/ModalDelete';
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

export default function App() {
  // ToDos //
  const [todos, setTodos] = useState(DUMMY_DATA);
  const [activeList, setActiveList] = useState('Work');
  const [modalData, setModalData] = useState(null);
  const lists = Object.keys(todos);
  const tasks = todos[activeList];

  const appContainerCombinedClasses = [
    'bg-success',
    'bg-gradient',
    'vh-100',
    'text-light',
    'pt-5',
  ].join(' ');

  function handleSelectList(listTitle) {
    setActiveList(listTitle);
  }

  function handleAddNewList(listTitle) {
    setTodos(prevTodos => {
      const cloneTodos = JSON.parse(JSON.stringify(prevTodos));
      cloneTodos[listTitle] = [];

      setActiveList(listTitle);

      return cloneTodos;
    });
  }

  function handleAddNewTask(taskTitle) {
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
  }

  function handleDeleteList() {
    setTodos(prevTodos => {
      const cloneTodos = JSON.parse(JSON.stringify(prevTodos));

      delete cloneTodos[activeList];

      setActiveList(Object.keys(cloneTodos)[0]);

      return cloneTodos;
    });
  }

  function handleDeleteTask(taskID) {
    setTodos(prevTodos => {
      const cloneTodos = JSON.parse(JSON.stringify(prevTodos));

      cloneTodos[activeList] = cloneTodos[activeList].filter(
        task => task.id !== taskID
      );

      return cloneTodos;
    });
  }

  function handleMarkDone(taskID) {
    setTodos(prevTodos => {
      const cloneTodos = JSON.parse(JSON.stringify(prevTodos));
      const toggledTask = cloneTodos[activeList].find(
        task => task.id === taskID
      );

      if (toggledTask.done) toggledTask.done = false;
      else toggledTask.done = true;

      return cloneTodos;
    });
  }

  function handleShowModal(itemId) {
    const selectedTask = tasks.find(task => task.id === itemId);

    const itemType = selectedTask ? 'task' : 'list';
    const itemTitle = selectedTask ? selectedTask.title : activeList;

    setModalData({
      itemType,
      itemTitle,
      itemId,
    });
  }

  function handleCloseModal() {
    setModalData(null);
  }

  return (
    <div className={appContainerCombinedClasses}>
      <h1 className="text-center">To Do App</h1>
      <div className="container">
        <div className="row">
          <ListsCard
            onSelectList={handleSelectList}
            onAddNewList={handleAddNewList}
            todoLists={lists}
            activeList={activeList}
          />
          <TasksCard
            onShowModal={handleShowModal}
            onAddNewTask={handleAddNewTask}
            onMarkDone={handleMarkDone}
            tasks={tasks}
            activeList={activeList}
          />
          <ModalDelete
            show={modalData}
            itemType={modalData?.itemType}
            itemTitle={modalData?.itemTitle}
            itemId={modalData?.itemId}
            onCloseModal={handleCloseModal}
            onDeleteList={handleDeleteList}
            onDeleteTask={handleDeleteTask}
          />
        </div>
      </div>
    </div>
  );
}

// TODO: fix 'undefined' showing on the modal when closing due to the animation delay
