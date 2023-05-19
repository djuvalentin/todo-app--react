import React from 'react';
import './TaskTitle.css';

const TaskTitle = props => {
  return (
    <span className={'col-8' + (props.done ? ' crossed-off' : '')}>
      {props.title}
    </span>
  );
};

export default TaskTitle;
