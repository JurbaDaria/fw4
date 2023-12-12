import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async () => {
    try {
      const response = await axios.get('/store/tasks'); 
      return response.data; 
    } catch (error) {
      throw Error('Failed to fetch tasks'); 
    }
  }
);


export default store;
