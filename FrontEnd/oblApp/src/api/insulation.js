import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/insulations/';

export const getInsulations = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching insulations:', error);
    throw error;
  }
};

export const getInsulation = async (id) => {
  try {
    const response = await axios.get(`${API_URL}${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Insulation:', error);
    throw error;
  }
};

export const createInsulation = async (insulation) => {
  try {
    const response = await axios.post(API_URL, insulation);
    return response.data;
  } catch (error) {
    console.error('Error creating Insulation:', error);
    throw error;
  }
};

export const updateInsulation = async (id, insulation) => {
  try {
    const response = await axios.put(`${API_URL}${id}/`, insulation);
    return response.data;
  } catch (error) {
    console.error('Error updating Insulation:', error);
    throw error;
  }
};

export const deleteInsulation = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error deleting Insulation:', error);
    throw error;
  }
};