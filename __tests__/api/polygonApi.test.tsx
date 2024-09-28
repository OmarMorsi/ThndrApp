import axios from 'axios';
import {afterEach, describe, expect, it, jest} from '@jest/globals';
import {getTickers} from '../../src/api/polygonApi';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>; // Cast axios to a mocked version

describe('getTickers', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch tickers successfully', async () => {
    const searchTerm = 'AAPL';
    const BASE_URL = 'https://api.polygon.io';
    const API_KEY = '_FSR6pdNIFrNHvogVksWmXaxcfBZDA_l';
    const expectedData = {
      tickers: [{symbol: 'AAPL', name: 'Apple Inc.'}],
    };

    mockedAxios.get.mockResolvedValueOnce({data: expectedData});

    const result = await getTickers(searchTerm);

    expect(mockedAxios.get).toHaveBeenCalledWith(
      `${BASE_URL}/v3/reference/tickers`,
      {
        params: {search: searchTerm},
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json',
        },
      },
    );
    expect(result).toEqual(expectedData);
  });

  it('should throw an error when the request fails', async () => {
    const searchTerm = 'INVALID';
    const errorMessage = 'Request failed with status code 500';

    mockedAxios.get.mockRejectedValueOnce(new Error(errorMessage));

    await expect(getTickers(searchTerm)).rejects.toThrow(errorMessage);
  });
});
