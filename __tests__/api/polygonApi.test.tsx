import axios from 'axios';
import {afterEach, describe, expect, it, jest} from '@jest/globals';
import {getTickers} from '../../src/api/polygonApi';

jest.mock('axios');

describe('getTickers', () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear any mocked calls after each test
  });

  it('should fetch tickers successfully', async () => {
    // Arrange
    const searchTerm = 'AAPL';
    const BASE_URL = 'https://api.polygon.io';
    const API_KEY = '_FSR6pdNIFrNHvogVksWmXaxcfBZDA_l';
    const expectedData = {
      tickers: [
        {symbol: 'AAPL', name: 'Apple Inc.'},
        // Add more mock data if needed
      ],
    };

    // Mock the axios GET request
    axios.get.mockResolvedValueOnce({data: expectedData});

    // Act
    const result = await getTickers(searchTerm);

    // Assert
    expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/v3/reference/tickers`, {
      params: {search: searchTerm},
      headers: {
        Authorization: `Bearer ${API_KEY}`,
        'Content-Type': 'application/json',
      },
    });
    expect(result).toEqual(expectedData);
  });

  it('should throw an error when the request fails', async () => {
    // Arrange
    const searchTerm = 'INVALID';
    const errorMessage = 'Request failed with status code 500';

    // Mock the axios GET request to reject with an error
    axios.get.mockRejectedValueOnce(new Error(errorMessage));

    // Act & Assert
    await expect(getTickers(searchTerm)).rejects.toThrow(errorMessage);
  });
});
