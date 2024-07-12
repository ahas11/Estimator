import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/spray-foams/';

export const getSprayFoams = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching SprayFoams:', error);
    throw error;
  }
};

export const getSprayFoam = async (id) => {
  try {
    const response = await axios.get(`${API_URL}${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching SprayFoam:', error);
    throw error;
  }
};

export const createSprayFoam = async (sprayFoam) => {
  try {
    const response = await axios.post(API_URL, sprayFoam);
    return response.data;
  } catch (error) {
    console.error('Error creating SprayFoam:', error);
    throw error;
  }
};

export const updateSprayFoam = async (id, sprayFoam) => {
  try {
    const response = await axios.put(`${API_URL}${id}/`, sprayFoam);
    return response.data;
  } catch (error) {
    console.error('Error updating SprayFoam:', error);
    throw error;
  }
};

export const deleteSprayFoam = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error deleting SprayFoam:', error);
    throw error;
  }
};