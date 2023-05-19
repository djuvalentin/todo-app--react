import React, { useState } from 'react';
import ListBox from './components/lists/ListBox';
import TaskBox from './components/tasks/TaskBox';
import ModalDelete from './components/ModalDelete';

// const lists = [
//   { id: "001", title: "Work" },
//   { id: "002", title: "Home" },
//   { id: "003", title: "Grocery" },
//   { id: "004", title: "Other" },
// ];

// const tasks = [{ id: "001", title: "Banana", list: "" }];

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

  // MODAL //
  const [showDeletionModal, setShowDeletionModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const [deletionItemIdentifier, setDeletionItemIdentifier] = useState('');
  const [deleteHandler, setDeleteHandler] = useState(() => () => null);

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

      console.log(cloneTodos);

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

  const hideModalHandler = () => {
    setShowDeletionModal(false);
  };

  const deleteList = function () {
    const listName = this;

    setTodos(prevTodos => {
      const cloneTodos = JSON.parse(JSON.stringify(prevTodos));

      delete cloneTodos[listName];

      setActiveList(Object.keys(cloneTodos)[0]);

      return cloneTodos;
    });

    //Close Modal
    setShowDeletionModal(false);
  };

  const deleteTask = function () {
    const taskID = this;

    setTodos(prevTodos => {
      const cloneTodos = JSON.parse(JSON.stringify(prevTodos));
      const itemIndex = cloneTodos[activeList].findIndex(
        task => task.id === taskID
      );
      cloneTodos[activeList].splice(itemIndex, 1);

      return cloneTodos;
    });

    //Close Modal
    setShowDeletionModal(false);
  };

  const promptDeleteHandler = (type, itemIdentifier) => {
    setDeletionItemIdentifier(() => itemIdentifier);
    setModalType(type);
    setShowDeletionModal(true);
    setDeleteHandler(() => {
      if (type === 'task') return deleteTask;
      if (type === 'list') return deleteList;
    });
  };

  return (
    <div>
      <div className="bg-success bg-gradient vh-100 text-light pt-5">
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
              onPromptDelete={promptDeleteHandler}
              onAddNewTask={addNewTaskHandler}
              onToggleCrossOff={toggleCrossOffHandler}
              listTasks={tasks}
              activeList={activeList}
            />
          </div>
        </div>
      </div>
      <ModalDelete
        type={modalType}
        show={showDeletionModal}
        onHide={hideModalHandler}
        onDelete={deleteHandler}
        deletionItemIdentifier={deletionItemIdentifier}
      />
    </div>
  );
}

export default App;

//TODO:
//DONE Create a message in tasks container when list is empty
//DONE Create a message in lists container when there are no lists
//DONE Do not render tasks container if there are no lists
//DONE Mark list as active on addList
//DONE add a warning message if the list already exists
//DONE create a ValidationFailMessage component
//DONE adjust styles for the warning message
//DONE adjust styles for delete list button
//DONE adjust styles for task buttons for better visibility
//DONE adjust styles for crossed off tasks
//DONE add a submit button to the form
// adjust responsivnes
