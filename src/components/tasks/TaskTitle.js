import React from 'react';
import styles from './TaskTitle.module.css';

const TaskTitle = props => {
  const titleCombinedClasses = [
    'd-flex',
    'align-items-center',
    'col-8',
    styles['custom-min-width-200px'],
    props.done && styles['crossed-off'],
  ].join(' ');

  return <span className={titleCombinedClasses}>{props.title}</span>;
};

export default TaskTitle;
