import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/clients/';

export const getClients = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching Clients:', error);
    throw error;
  }
};

export const getClient = async (id) => {
  try {
    const response = await axios.get(`${API_URL}${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Client:', error);
    throw error;
  }
};

export const createClient = async (client) => {
  try {
    const response = await axios.post(API_URL, client);
    return response.data;
  } catch (error) {
    console.error('Error creating Client:', error);
    throw error;
  }
};

export const updateClient = async (id, client) => {
  try {
    const response = await axios.put(`${API_URL}${id}/`, client);
    return response.data;
  } catch (error) {
    console.error('Error updating Client:', error);
    throw error;
  }
};

export const deleteClient = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}${id}/`);
    return response.data;
  } catch (error) {
    console.error('Error deleting Client:', error);
    throw error;
  }
};