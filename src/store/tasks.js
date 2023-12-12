import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
   
    updateTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const existingTask = state.tasks.find(task => task.id === id);
      if (existingTask) {
        Object.assign(existingTask, updatedTask);
      }
    },
    
  },
});


export const { addTask, removeTask, updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
