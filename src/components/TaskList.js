import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NewTaskForm from './NewTaskForm';
import debounce from 'lodash/debounce';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from './tasksSlice';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTasks, setFilteredTasks] = useState([]);
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.tasks.tasks);
  const status = useSelector(state => state.tasks.status);



  useEffect(() => {
    dispatch(fetchTasks()); 
  }, [dispatch]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://61438f01afc88600173868e5.mockapi.io/api/tasks');
        if (!response.ok) {
          throw new Error('Ошибка загрузки данных');
        }
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSortChange = () => {
    setSortBy(sortBy === 'asc' ? 'desc' : 'asc');
  };

  const handleSearchChange = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);
    debouncedSearch(searchValue);
  };

  const debouncedSearch = debounce((value) => {
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredTasks(filtered);
  }, 300);

  useEffect(() => {
    const filtered = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTasks(filtered);
  }, [searchTerm, tasks]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    localStorage.setItem('savedTasks', JSON.stringify(tasks));
  }, [tasks]);

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === 'asc') {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  if (loading) {
    return (
      <div>
        <div className="skeleton-loading">
          <div className="skeleton-task"></div>
          <div className="skeleton-task"></div>
          <div className="skeleton-task"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Произошла ошибка: {error}</p>;
  }

  return (
    <div>
      <button onClick={handleSortChange}>
        Сортировать по {sortBy === 'asc' ? 'убыванию' : 'возрастанию'}
      </button>
      <input
        type="text"
        placeholder="Поиск задач..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {sortedTasks.map((task) => (
        <div key={task.id}>
          <Link to={`/task/${task.id}`}>
            <h3>{task.title}</h3>
          </Link>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
        </div>
      ))}
      <NewTaskForm addTask={handleAddTask} />
    </div>
  );

if (status === 'loading') {
  return <div>Loading...</div>;
} else if (status === 'error') {
  return <div>Error fetching tasks</div>;
} else {
  return (
    <div>
      <h2>Tasks List</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
}
};



export default TaskList;
