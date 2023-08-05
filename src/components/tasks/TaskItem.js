import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

import styles from './TaskItem.module.css';

export default function TaskItem({ done, title, id, onShowModal, onMarkDone }) {
  const listItemCombinedClasses = ['list-group-item', 'container'].join(' ');

  const titleCombinedClasses = [
    'd-flex',
    'align-items-center',
    'col-8',
    styles['custom-min-width-200px'],
    done ? styles['crossed-off'] : '',
  ].join(' ');

  const actionCombinedClasses = [
    'col-4',
    'btn-group',
    styles['min-width-100px'],
  ].join(' ');

  const btnClasses = ['fs-5', 'p-0', 'task-btn'];

  const btnCheckCombinedClasses = [
    ...btnClasses,
    !done ? styles['check'] : styles['uncheck'],
  ].join(' ');

  const btnDeleteCombinedClasses = [...btnClasses, styles['delete']].join(' ');

  const iconCheckCombinedClasses = [
    'bi',
    !done ? 'bi-check-lg' : 'bi-arrow-counterclockwise',
  ].join(' ');

  const iconDeleteCombinedClasses = ['bi', 'bi-dash-circle'].join(' ');

  const btnVariant = 'outline-secondary';

  return (
    <li className={listItemCombinedClasses}>
      <div className="row">
        <span className={titleCombinedClasses}>{title}</span>
        <ButtonGroup className={actionCombinedClasses}>
          <Button
            onClick={() => onMarkDone(id)}
            className={btnCheckCombinedClasses}
            variant={btnVariant}
          >
            <i className={iconCheckCombinedClasses}></i>
          </Button>
          <Button
            onClick={() => onShowModal(id)}
            className={btnDeleteCombinedClasses}
            variant={btnVariant}
          >
            <i className={iconDeleteCombinedClasses}></i>
          </Button>
        </ButtonGroup>
      </div>
    </li>
  );
}
