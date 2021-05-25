import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import styles from './styles'
import Post from '../../components/Post'
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../../graphql/queries'
// import feed from '../../../assets/data/feed'



//I get this data fro dummy data feed, but now de date come from data API
const SearchResultsScreen = (props) => {
  const { guests } = props
  console.log({guests})
  const [post, setPost] = useState([]);
  useEffect(() => {
    //call Data API
    const fetchPosts = async () => {
      try {
        const postsResult = await API.graphql(
          graphqlOperation(listPosts,{
            filter:{
              maxGuests:{
                ge : guests
              }
            }
          })
        )
        setPost(postsResult.data.listPosts.items);
      } catch (e) {
        console.log(e)
      }
    }
    fetchPosts();
  }, [])
  return (
    <View>
      <FlatList
        data={post}
        renderItem={({ item }) => <Post post={item} />}
      />
    </View>
  );
};

export default SearchResultsScreen;