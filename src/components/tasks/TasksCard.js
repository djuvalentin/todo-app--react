import React from 'react';
import Card from '../UI/Card';
import Button from 'react-bootstrap/Button';
import InputForm from '../form/InputForm';
import EmptyCardMessage from '../UI/EmptyCardMessage';
import ListGroup from 'react-bootstrap/ListGroup';
import TaskItem from './TaskItem';

import styles from './TaskCard.module.css';

export default function TasksCard({
  tasks,
  activeList,
  onShowModal,
  onMarkDone,
  onAddNewTask,
}) {
  if (!tasks) return;
  const cardEmpty = tasks.length === 0;

  const unorderedListCombinedClasses = ['list-group', 'fs-4', 'mb-4'].join(' ');

  const headingCombinedClasses = [
    'd-flex',
    'align-items-center',
    'justify-content-center',
    'position-relative',
  ].join(' ');

  const deleteBtnCombinedClasses = [
    'position-absolute',
    'end-0',
    'me-5',
    'py-0 px-2',
    'border-0',
    'bg-transparent',
    styles['custom-hover-color'],
  ].join(' ');

  const deleteIconCombinedClasses = ['bi', 'bi-trash', 'fs-2'].join(' ');

  return (
    <Card variant="task">
      <div className={headingCombinedClasses}>
        <h2 className="m-3">{activeList}</h2>
        <Button onClick={onShowModal} className={deleteBtnCombinedClasses}>
          <i className={deleteIconCombinedClasses} />
        </Button>
      </div>
      <EmptyCardMessage
        message="No tasks yet..."
        fontSize="1"
        show={cardEmpty}
      />
      <ListGroup as="ul" className={unorderedListCombinedClasses}>
        {tasks.map((task, i) => (
          <TaskItem
            onShowModal={onShowModal}
            onMarkDone={onMarkDone}
            key={i}
            title={task.title}
            done={task.done}
            id={task.id}
          />
        ))}
      </ListGroup>
      <InputForm onAddNewTask={onAddNewTask} inputType="task" />
    </Card>
  );
}
