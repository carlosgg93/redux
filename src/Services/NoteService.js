import axios from 'axios';

const baseUrl = 'http://localhost:3001/notes';

export const getAllNotes = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
}
