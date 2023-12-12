import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const SingleTask = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`https://yourapi.com/tasks/${id}`)
      .then(response => response.json())
      .then(data => setTask(data))
      .catch(error => console.error('Ошибка загрузки данных:', error));
  }, [id]);

  return (
    <div>
      <h2>Страница задачи {id}</h2>
      {task ? (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
        </div>
      ) : (
        <p>Загрузка данных...</p>
      )}
    </div>
  );
};

export default SingleTask;
