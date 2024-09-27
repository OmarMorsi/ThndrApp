import React, {useState} from 'react';
import {TextInput, StyleSheet, View, TextInputProps} from 'react-native';
import colors from '../styles/colors';

interface SearchBarProps extends TextInputProps {
  onSearch: (searchText: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search for stocks',
  ...props
}) => {
  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = (text: string) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        value={searchText}
        onChangeText={handleSearch}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    width: 300,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: colors.lightColor,
  },
  input: {
    padding: 10,
    fontSize: 16,
    color: colors.white,
  },
});

export default SearchBar;
