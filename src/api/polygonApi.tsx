import axios from 'axios';

const BASE_URL = 'https://api.polygon.io';
const API_KEY = '_FSR6pdNIFrNHvogVksWmXaxcfBZDA_l';

export const getTickers = async (searchTerm: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/v3/reference/tickers`, {
      params: {
        search: searchTerm,
      },
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
