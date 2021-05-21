import React from 'react';
import { Text, View, Image } from 'react-native';
import { Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps


const CustomMarked = (props) => {
    const { coordinate, price, onPress, isSelected } = props;
    //console.log(props)
    return (
        <Marker
            coordinate={coordinate}
            onPress={onPress}
        >
            <View style={{
                backgroundColor: isSelected ? 'black' : 'white',
                padding: 5,
                borderRadius: 10,
                borderColor: "grey",
                borderWidth: 1
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    color: isSelected ? "white" : 'black'
                }}>
                    {price}
                </Text>
            </View>
        </Marker>
    );
}

export default CustomMarked;

