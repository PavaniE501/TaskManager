import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TaskList from './components/TaskList';
import AddTaskForm from './components/AddTaskForm';
import FilterTasks from './components/FilterTasks';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');

  // Fetch tasks from localStorage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'Completed') return task.completed;
    if (filter === 'Active') return !task.completed;
    return true;
  });

  return (
    <Router>
      <nav>
        <Link to="/">Tasks</Link>
        <Link to="/add">Add Task</Link>
      </nav>
      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <FilterTasks setFilter={setFilter} />
              <TaskList 
                tasks={filteredTasks} 
                deleteTask={deleteTask} 
                toggleTaskCompletion={toggleTaskCompletion} 
              />
            </>
          } 
        />
        <Route path="/add" element={<AddTaskForm addTask={addTask} />} />
      </Routes>
    </Router>
  );
};

export default App;
