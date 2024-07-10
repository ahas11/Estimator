import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/walls/';
const CALCULATE_EXPENSES_URL = 'http://127.0.0.1:8000/api/calculate-expenses/';

export const getWalls = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching walls:', error);
    throw error;
  }
};

export const getWall = async (id) => {
  try {
    const response = await axios.get(`${API_URL}${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching wall:', error);
    throw error;
  }
};

export const createWall = async (wall) => {
  try {
    const response = await axios.post(API_URL, wall);
    return response.data;
  } catch (error) {
    console.error('Error creating wall:', error);
    throw error;
  }
};

export const updateWall = async (id, wall) => {
  try {
    const response = await axios.put(`${API_URL}${id}/`, wall);
    return response.data;
  } catch (error) {
    console.error('Error updating wall:', error);
    throw error;
  }
};

export const deleteWall = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error deleting wall:', error);
    throw error;
  }
};

// New function to calculate expenses
export const calculateExpenses = async (wall) => {
  try {
    const response = await axios.post(CALCULATE_EXPENSES_URL, wall);
    return response.data;
  } catch (error) {
    console.error('Error calculating expenses:', error);
    throw error;
  }
};