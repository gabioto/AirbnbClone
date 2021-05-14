import React, { useState, useEffect, useRef } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Dimensions, StyleSheet, Text, View, FlatList, useWindowDimensions } from 'react-native'
import CustomMarket from '../../components/CustomMarker'
import PostCarrouselItem from '../../components/PostCarrouselItem'
import places from '../../../assets/data/feed'
import styles from './styles'


const SearchResultsMaps = (props) => {
    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const flatlist = useRef();
    const map = useRef();

    const viewConfig = useRef({itemVisiblePercentThreshold : 70});
    const onViewChanged = useRef(({viewableItems}) => {
        //cada vez q cambie el valor del scroll tbm cambiaremos el valor de selectedplaceID
        if(viewableItems.length > 0){
            const selectedPlaceId = viewableItems[0].item;
            console.log("scroll en : ",selectedPlaceId)
            setSelectedPlaceId(selectedPlaceId.id)
        }
    })

    useEffect(() => {
        if (!selectedPlaceId || !flatlist) {
            return;
        }
        const index = places.findIndex(place => place.id ===selectedPlaceId )
        flatlist.current.scrollToIndex({index})
        //cambiaremos aparecinia del mapa cuando cambie selected place
        const selectedPlace = places[index];
        const region = {
            latitud : selectedPlace.coordinate.latitude,
            longitud : selectedPlace.coordinate.longitude,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1
        }
        map.current.animateToRegion(region);
    }, [selectedPlaceId])

    const width = useWindowDimensions().width;
    return (
        <View style={styles.container}>
            <MapView
                ref = {map}
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
                        onPress={() => setSelectedPlaceId(place.id)}
                    />)
                )}
            </MapView>
            <View style={{ position: 'absolute', bottom: 10 }}>
                {/* <PostCarrouselItem post={places[0]}/> */}
                <FlatList
                    ref={flatlist}
                    data={places}
                    renderItem={({ item }) => <PostCarrouselItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled={Platform.OS === 'android'}
                    snapToAlignment={"center"}
                    snapToInterval={width - 60}
                    decelerationRate={'fast'}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                />
            </View>
        </View>
    )
};

export default SearchResultsMaps;