import React from 'react';
import {Provider} from 'react-redux';
import {SafeAreaView, StyleSheet} from 'react-native';
import ResultsComponent from './src/components/ResultComponent';
import store from './src/redux/store';
import SearchComponent from './src/components/SearchComponent';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <SearchComponent />
        <ResultsComponent />
      </SafeAreaView>
    </Provider>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});

export default App;
