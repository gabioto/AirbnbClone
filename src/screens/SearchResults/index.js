import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Post from '../../components/Post'



//I get this data fro dummy data feed, but now de date come from data API
const SearchResultsScreen = (props) => {
  const { posts } = props
 
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;