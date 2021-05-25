import React from 'react';
import { Text, View,Image,Pressable } from 'react-native';
import styles from './styles';
import {navigation, useNavigation} from '@react-navigation/native'

const days = 7;
const Post = (props) => {
  const post = props.post
  const navigation = useNavigation();
  const goToPostPage = () =>{
    navigation.navigate('Post',{post:post})
  }
  return (
    <Pressable onPress={goToPostPage} style ={styles.container}>
        {/* image */}
        <Image 
            style={styles.image}
            source={{uri:post.image}}

        />
        {/* Bed and bathroom */}
        <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom 
        </Text>
         
        {/* type and description */}
        
        <Text style={styles.description} numberOfLines={2}>
            {post.type}. {post.title}
        </Text>
        {/* all price  and new price */}
        <Text style={styles.prices}> 
            <Text style={styles.oldPrice}>${post.oldPrice} </Text>
            <Text style={styles.price}> ${post.newPrice} </Text>
            /night
        </Text>      
        {/* Total price */}
        <Text style={styles.totalPrice}>${post.newPrice* days } total</Text>

    </Pressable>
  );
}

export default Post;