import React from 'react';

const FilterTasks = ({ setFilter }) => {
  return (
    <div>
      <button onClick={() => setFilter('All')}>All</button>
      <button onClick={() => setFilter('Active')}>Active</button>
      <button onClick={() => setFilter('Completed')}>Completed</button>
    </div>
  );
};

export default FilterTasks;
