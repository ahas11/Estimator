import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/estimates/';

export const getEstimates = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching Estimates:', error);
    throw error;
  }
};

export const getEstimate = async (id) => {
  try {
    const response = await axios.get(`${API_URL}${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Estimate:', error);
    throw error;
  }
};

export const createEstimate = async (estimate) => {
  try {
    const response = await axios.post(API_URL, estimate);
    return response.data;
  } catch (error) {
    console.error('Error creating Estimate:', error);
    throw error;
  }
};

export const updateEstimate = async (id, estimate) => {
  try {
    const response = await axios.put(`${API_URL}${id}/`, estimate);
    return response.data;
  } catch (error) {
    console.error('Error updating Estimate:', error);
    throw error;
  }
};

export const deleteEstimate = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error deleting Estimate:', error);
    throw error;
  }
};