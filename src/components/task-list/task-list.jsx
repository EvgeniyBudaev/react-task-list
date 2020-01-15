import React from 'react';

import TaskListItem from '../task-list-item';

import './task-list.css';

const TaskList = ({ todos, onDeleted }) => {
  
  const elements = todos.map(item => {
    const { id } = item;
    return (
      <li key={id} className="list-item">
        <TaskListItem
          {...item}
          onDeleted={() => onDeleted(id)}
        />
      </li>
    );
  });

  return <ol className="list-counter-square task-list">{elements}</ol>;
};

export default TaskList;