import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    const newTask = {
      id: Date.now(),
      title,
      completed: false,
    };
    addTask(newTask);
    setTitle('');
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Enter task" 
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTaskForm;
