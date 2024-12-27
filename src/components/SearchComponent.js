import {React, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {clearSearch, searchUsers, setLoginText} from '../redux/actions';
import {TextInput, Button} from 'react-native-paper';

const SearchComponent = () => {
  const [login, setLogin] = useState('');
  const dispatch = useDispatch();
  const handleSearch = () => {
    if (login.trim()) {
      dispatch(searchUsers(login));
      dispatch(setLoginText(login));
    } else {
      alert('Please enter a valid username.');
    }
  };
  const clearSearchHandler = () => {
    console.log('clearSearch');
    setLogin('');
    dispatch(clearSearch());
  };
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Search Users</Text>
      <TextInput
        label="Search users"
        value={login}
        onChangeText={text => setLogin(text)}
        style={styles.input}
        selectionColor={'#000000'}
      />
      <View style={styles.buttonContainer}>
        <Button mode="contained" style={styles.button} onPress={handleSearch}>
          Search
        </Button>
        <Button
          mode="contained"
          style={[styles.button, styles.clearButton]}
          onPress={clearSearchHandler}>
          Clear
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  input: {
    marginBottom: 12,
    borderRadius: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    marginTop: 20,
    flex: 1,
    marginEnd: 5,
  },
  clearButton: {
    marginStart: 5,
  },
});

export default SearchComponent;
