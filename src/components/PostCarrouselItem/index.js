import React from 'react';
import { Text, View, Image } from 'react-native';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import styles from './styles';

// import { Container } from './styles';

const Post = (props) => {
    const post = props.post
    const WIDTH = useWindowDimensions().width;
    return (
        <View style={styles.container,{width:WIDTH-60}}>
            {/* image */}
            <View style={styles.innerContainer}>
                <Image
                    style={styles.image}
                    source={{ uri: post.image }}

                />
                {/* Bed and bathroom */}
                <View style = {styles.containerDetails}>
                    <Text style={styles.bedrooms}>
                        {post.bed} bed {post.bedroom} bedroom
                    </Text>

                    {/* type and description */}

                    <Text style={styles.description} numberOfLines={2}>
                        {post.type}. {post.title}
                    </Text>
                    {/* all price  and new price */}
                    <Text style={styles.prices}> 
                        <Text style={styles.price}>${post.newPrice} </Text>
                        / night
                    </Text>
                   
                </View>
            </View>

        </View>
    );
}

export default Post;