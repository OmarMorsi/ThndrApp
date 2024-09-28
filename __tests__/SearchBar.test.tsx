import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import SearchBar from '../src/components/SearchBar';
import {describe, expect, it, jest} from '@jest/globals';

jest.mock('axios');
describe('SearchBar', () => {
  it('should update the text input and call onSearch with the correct value', () => {
    const mockOnSearch = jest.fn();
    const {getByPlaceholderText} = render(
      <SearchBar onSearch={mockOnSearch} placeholder="Search for stocks" />,
    );

    const input = getByPlaceholderText('Search for stocks');

    fireEvent.changeText(input, 'AAPL');

    expect(mockOnSearch).toHaveBeenCalledWith('AAPL');

    expect(input.props.value).toBe('AAPL');
  });
});
