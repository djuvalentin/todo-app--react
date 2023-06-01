import React, { useState } from 'react';
import TaskButton from './TaskButton';
import ModalDelete from '../../UI/ModalDelete';
import styles from './TaskButtons.module.css';

const TaskButtons = props => {
  const [deletePrompt, setDeletePrompt] = useState(null);

  const showModalHandler = () => {
    setDeletePrompt({
      title: `Remove task`,
      message: `Are you sure you want to delete '${props.taskTitle}' task?`,
    });
  };

  const closeModalHandler = () => {
    setDeletePrompt(null);
  };

  const deleteTaskHandler = () => {
    props.onDeleteTask(props.taskID);
    setDeletePrompt(null);
  };

  const toggleCrossOffHandler = () => {
    props.onToggleCrossOff(props.taskID);
    setDeletePrompt(null);
  };

  const buttonsCombinedClasses = [
    'col-4',
    'btn-group',
    styles['min-width-100px'],
  ].join(' ');

  return (
    <div
      className={buttonsCombinedClasses}
      role="group"
      aria-label="Manage task"
    >
      <TaskButton
        onManageTask={toggleCrossOffHandler}
        taskDone={props.taskDone}
        bootstrapIconName={
          'bi-' + (props.taskDone ? 'arrow-counterclockwise' : 'check-lg')
        }
      />
      <TaskButton onManageTask={showModalHandler} deleteButton={true} />
      <ModalDelete
        onClose={closeModalHandler}
        onDelete={deleteTaskHandler}
        show={deletePrompt}
        title={deletePrompt && deletePrompt.title}
        message={deletePrompt && deletePrompt.message}
      />
    </div>
  );
};

export default TaskButtons;
