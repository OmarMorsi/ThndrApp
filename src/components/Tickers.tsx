import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {getTickers} from '../api/polygonApi';

import Card from './Card';
import SearchBar from '../components/SearchBar';
import _ from 'lodash';
import colors from '../styles/colors';

const Tickers: React.FC = () => {
  const [tickers, setTickers] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const fetchTickers = async (search: string) => {
    if (isFetching) return;
    setIsFetching(true);
    setLoading(true);
    try {
      const data = await getTickers(search);

      if (data.results && Array.isArray(data.results)) {
        setTickers(data.results);
        setError(null);
      } else {
        setTickers([]);
        setError('No tickers found');
      }
    } catch (err: any) {
      if (err.response && err.response.status === 429) {
        setError(
          'Too many requests. Please wait a few seconds before searching again.',
        );
      } else {
        setError('Failed to fetch tickers');
      }
    } finally {
      setLoading(false);
      setIsFetching(false);
    }
  };

  const debouncedFetchTickers = useCallback(
    _.debounce(text => {
      fetchTickers(text);
    }, 500),
    [],
  );

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    debouncedFetchTickers(text);
  };

  useEffect(() => {
    fetchTickers('');
  }, []);

  return (
    <ScrollView>
      <SearchBar
        value={searchTerm}
        onSearch={handleSearch}
        placeholder="Search for stocks"
      />
      {loading && (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={colors.white} />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      )}

      {error ===
      'Too many requests. Please wait a few seconds before searching again.' ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <>
          {error && <Text style={styles.errorText}>{error}</Text>}
          {!loading && tickers.length > 0
            ? tickers.map((ticker, index) => (
                <View style={styles.cardRow} key={index}>
                  <Card ticker={ticker.ticker} name={ticker.name} />
                  {index < tickers.length - 1 && (
                    <Card
                      ticker={tickers[index + 1].ticker}
                      name={tickers[index + 1].name}
                    />
                  )}
                </View>
              ))
            : !loading && <Text>No tickers available</Text>}
        </>
      )}
    </ScrollView>
  );
};

export default Tickers;

const styles = StyleSheet.create({
  cardRow: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    color: colors.white,
    fontSize: 16,
  },
  errorText: {
    color: colors.white,
    textAlign: 'center',
    marginTop: 10,
  },
});
