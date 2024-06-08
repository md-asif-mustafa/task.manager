import React from 'react';

const TaskItem = ({ task }) => {
  return (
    <li>
      {task.title}
      {task.completed ? ' (Completed)' : ''}
    </li>
  );
};

export default TaskItem;
