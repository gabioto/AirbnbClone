import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from './styles';

// import { Container } from './styles';

const DetailedPost = (props) => {
    const post = props.post
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* image */}
                <Image
                    style={styles.image}
                    source={{ uri: post.image }}

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
                <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
                <Text style={styles.longDescription}>{post.description}</Text>
            </View>
        </ScrollView>

    );
}

export default DetailedPost;