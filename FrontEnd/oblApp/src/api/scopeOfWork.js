import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/scope-of-work/';

export const getScopes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching Scopes:', error);
    throw error;
  }
};

export const getScope = async (id) => {
  try {
    const response = await axios.get(`${API_URL}${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Scope:', error);
    throw error;
  }
};

export const createScope = async (scope) => {
  try {
    const response = await axios.post(API_URL, scope);
    return response.data;
  } catch (error) {
    console.error('Error creating Scope:', error);
    throw error;
  }
};

export const updateScope = async (id, scope) => {
  try {
    const response = await axios.put(`${API_URL}${id}/`, scope);
    return response.data;
  } catch (error) {
    console.error('Error updating Scope:', error);
    throw error;
  }
};

export const deleteScope = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error deleting Scope:', error);
    throw error;
  }
};