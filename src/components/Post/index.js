import React from 'react';
import { Text, View,Image } from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const Post = (props) => {
  return (
    <View style ={styles.container}>
        {/* image */}
        <Image 
            style={styles.image}
            source={{uri:'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg'}}

        />
        {/* Bed and bathroom */}
        <Text style={styles.bedrooms}> 1 bed 1 bathroom</Text>
         
        {/* type and description */}
        
        <Text style={styles.description} numberOfLines={2}>
            Entire flat puerto de la cruz lorem lorejadfsdjfksdjfjsdbfjsdhgsdjfghhsdjfbgsjhdfbghsjdfbgsdjhf
        </Text>
        {/* all price  and new price */}
        <Text style={styles.prices}> 
            <Text style={styles.oldPrice}>$36 </Text>
            <Text style={styles.price}> $30 </Text>
            /night
        </Text>      
        {/* Total price */}
        <Text style={styles.totalPrice}>$230 total</Text>

    </View>
  );
}

export default Post;