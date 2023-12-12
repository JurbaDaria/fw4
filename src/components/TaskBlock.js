import React from 'react';

const TaskBlock = ({ title, description, completed, onStatusChange }) => {
  const handleStatusChange = () => {
    onStatusChange(!completed);
  };

  return (
    <div className="task">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Status: {completed ? 'Completed' : 'Incomplete'}</p>
      <button onClick={handleStatusChange}>
        {completed ? 'Отметить как Не завершено' : 'Отметить как Завершено'}
      </button>
    </div>
  );
};

export default TaskBlock;
