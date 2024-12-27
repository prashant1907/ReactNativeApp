import {FlatList, View, Text, Image, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchMoreUsers, setpageCount} from '../redux/actions';
import React from 'react';
import {Card, ActivityIndicator} from 'react-native-paper';

const ResultsComponent = () => {
  const {users, page, isLoading} = useSelector(state => state.users);
  const dispatch = useDispatch();

  const renderUser = ({item}) => (
    <Card style={styles.card}>
      <Card.Content>
        <View style={styles.row}>
          <Image source={{uri: item?.avatar_url}} style={styles.avatar} />
          <View>
            <Text style={styles.username}>{item.login}</Text>
            <Text style={styles.userType}>{item.type}</Text>
          </View>
        </View>
      </Card.Content>
    </Card>
  );

  const loadMore = () => {
    if (!isLoading) {
      dispatch(fetchMoreUsers());
      dispatch(setpageCount(page + 1));
    }
  };

  return (
    <FlatList
      data={users}
      keyExtractor={item => item.id.toString()}
      renderItem={renderUser}
      onEndReached={loadMore}
      onEndReachedThreshold={0.9}
      ListFooterComponent={
        isLoading ? (
          <ActivityIndicator animating={true} style={styles.loader} />
        ) : null
      }
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  card: {
    marginVertical: 8,
    marginHorizontal: 16,
    elevation: 2,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  username: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  userType: {
    color: '#000000',
    fontSize: 12,
  },
  loader: {
    marginVertical: 20,
    alignSelf: 'center',
  },
});

export default ResultsComponent;
