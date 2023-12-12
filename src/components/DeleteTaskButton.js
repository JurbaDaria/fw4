import React from 'react';

const DeleteTaskButton = ({ deleteTask }) => {
  const handleDelete = () => {
    deleteTask();
  };

  return (
    <button onClick={handleDelete}>Удалить</button>
  );
};

export default DeleteTaskButton;
