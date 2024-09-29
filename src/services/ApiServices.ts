// src/services/ApiService.ts
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Dummy API
});

export const fetchDummyData = async () => {
  try {
    const response = await apiClient.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
