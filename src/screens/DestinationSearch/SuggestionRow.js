import styles from './styles'
import React from 'react';

import Entypo from 'react-native-vector-icons/Entypo'
import { Pressable, Text, View} from 'react-native';


const SuggestionRow = ({item}) => {
    return (
        <View  style={styles.row}>
            <View style={styles.iconContainer}>
                <Entypo name="location-pin" size={30} />
            </View>
            <Text style={styles.locationText}>{item.description} </Text>
        </View>
    );
};

export default SuggestionRow;