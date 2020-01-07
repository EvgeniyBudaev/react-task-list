import React from 'react';

import TaskListItem from '../task-list-item';

import './task-list.css';

const TaskList = ({ todos }) => {
  
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-item">
        <TaskListItem
          {...itemProps}
        />
      </li>
    );
  });

  return <ol className="list-counter-square task-list">{elements}</ol>;
};

export default TaskList;