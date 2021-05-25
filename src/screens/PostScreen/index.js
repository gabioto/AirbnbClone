import React,{useState} from 'react';
import { Pressable, Text, TextBase, View } from 'react-native';
import {useNavigation} from '@react-navigation/native'

import styles from './styles';
import DetailedPost from '../../components/DetailedPost'
import Post from '../../components/Post'
import {useRoute} from '@react-navigation/native'

import places from  '../../../assets/data/feed' 


const PostScreen = (props) => {
  const route = useRoute()
  const {post} = route.params

  return (
    <View style={{backgroundColor:'white'}}>
        <DetailedPost post={post}/>
    </View>
  );
}

export default PostScreen;