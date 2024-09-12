import React from 'react';

const TaskItem = ({ task, deleteTask, toggleTaskCompletion }) => {
  return (
    <div>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={() => toggleTaskCompletion(task.id)} 
      />
      <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
