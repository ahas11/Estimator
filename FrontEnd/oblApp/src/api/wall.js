import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/walls/';

export const getWalls = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getWall = async (id) => {
  const response = await axios.get(`${API_URL}${id}/`);
  return response.data;
};

export const createWall = async (wall) => {
  const response = await axios.post(API_URL, wall);
  return response.data;
};

export const updateWall = async (id, wall) => {
  const response = await axios.put(`${API_URL}${id}/`, wall);
  return response.data;
};

export const deleteWall = async (id) => {
  const response = await axios.delete(`${API_URL}${id}/`);
  return response.data;
};
