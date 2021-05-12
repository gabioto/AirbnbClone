import React, { useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Dimensions, StyleSheet, Text, View,FlatList ,useWindowDimensions} from 'react-native'
import CustomMarket from '../../components/CustomMarker'
import PostCarrouselItem from '../../components/PostCarrouselItem'
import places from '../../../assets/data/feed'
import styles from './styles'


const SearchResultsMaps = (props) => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const width = useWindowDimensions().width;
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 28.3279822,
                    longitude: -16.51248447,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}>

                {/* for each palces render one marker on the map: can use de map funtion from js witch 
            the loops for one array and tranform it to something  */}
                {places.map(place => (
                    <CustomMarket
                        key={place.id}
                        coordinate={place.coordinate} 
                        price={place.totalPrice} 
                        isSelected={place.id === selectedPlaceId}   
                        onPress={()=> setSelectedPlaceId(place.id)}
                    />)
                )}
            </MapView>
            <View style={{position:'absolute',bottom:10}}> 
                {/* <PostCarrouselItem post={places[0]}/> */}
                <FlatList
                    data={places}
                    renderItem={({item})=> <PostCarrouselItem post={item}/>}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width-60}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                />
            </View>
        </View>
    )
};

export default SearchResultsMaps;