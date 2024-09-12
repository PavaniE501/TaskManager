import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <div>
      {tasks.map(task => (
        <TaskItem 
          key={task.id} 
          task={task} 
          deleteTask={deleteTask} 
          toggleTaskCompletion={toggleTaskCompletion} 
        />
      ))}
    </div>
  );
};

export default TaskList;
