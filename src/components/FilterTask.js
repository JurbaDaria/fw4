import React from 'react';

const FilterTasks = ({ filterTasks }) => {
  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    filterTasks(selectedFilter);
  };

  return (
    <select onChange={handleFilterChange}>
      <option value="all">Все задачи</option>
      <option value="inProgress">В процессе</option>
      <option value="completed">Завершенные</option>
    </select>
  );
};

export default FilterTasks;
