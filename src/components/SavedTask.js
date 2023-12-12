import React, { useState, useEffect } from 'react';

const SavedTasks = () => {
  const [savedTasks, setSavedTasks] = useState([]);

  useEffect(() => {
    const savedTasksFromStorage = localStorage.getItem('savedTasks');
    if (savedTasksFromStorage) {
      setSavedTasks(JSON.parse(savedTasksFromStorage));
    }
  }, []);


  rreturn (
    <div>
      <h2>Избранное</h2>
      <ul>
        {savedTasks.map((task, index) => (
          <li key={index}>
            {task.title} - {task.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SavedTasks;
