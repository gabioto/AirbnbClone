import React,{useState} from 'react';
import { Pressable, Text, TextBase, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import styles from './styles';
import DetailedPost from '../../components/DetailedPost'
import Post from '../../components/Post'
import {useRoute} from '@react-navigation/native'

import places from  '../../../assets/data/feed' 


const PostScreen = () => {
  const route = useRoute()
  const post= places.find(place => place.id === route.params.postId);  
  console.log(route.params)

  return (
    <View style={{backgroundColor:'white'}}>
        <DetailedPost post={post}/>
    </View>
  );
}

export default PostScreen;