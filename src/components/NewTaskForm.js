import React, { useState } from 'react';

const NewTaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!title.trim() || !description.trim()) {
      setError('Пожалуйста, заполните все поля');
      return;
    }

    addTask({ title, description });

    setTitle('');
    setDescription('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Добавить задачу</button>
    </form>
  );
};

export default NewTaskForm;
