import React, { useState, useEffect, useRef } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { Dimensions, StyleSheet, Text, View, FlatList, useWindowDimensions } from 'react-native'
import CustomMarket from '../../components/CustomMarker'
import PostCarrouselItem from '../../components/PostCarrouselItem'
import places from '../../../assets/data/feed'
import styles from './styles'
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../../graphql/queries'


const SearchResultsMaps = (props) => {
    const { guests } = props

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const [posts, setPosts] = useState([]);
    const flatlist = useRef();
    const map = useRef();

    const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
    const onViewChanged = useRef(({ viewableItems }) => {
        //cada vez q cambie el valor del scroll tbm cambiaremos el valor de selectedplaceID
        if (viewableItems.length > 0) {
            const selectedPlaceId = viewableItems[0].item;
            //console.log("scroll en : ",selectedPlaceId)
            setSelectedPlaceId(selectedPlaceId.id)
        }
    })

    const width = useWindowDimensions().width;
    useEffect(() => {
        //call Data API
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts,{
                        filter:{
                          maxGuests:{
                            ge : guests
                          }
                        }
                      })
                )
                setPosts(postsResult.data.listPosts.items);
            } catch (e) {
                console.log(e)
            }
        }
        fetchPosts();
    })

    useEffect(() => {
        if (!selectedPlaceId || !flatlist) {
            return;
        }
        const index = posts.findIndex(place => place.id === selectedPlaceId)
        flatlist.current.scrollToIndex({ index })
        //cambiaremos aparecinia del mapa cuando cambie selected place
        const selectedPlace = posts[index];
        console.log("cambia ubicaicon", selectedPlace)
        const region = {
            latitude: selectedPlace.latitude,
            longitude: selectedPlace.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8,
        }
        map.current.animateToRegion(region);
        console.log(map.current)
        
        
    }, [selectedPlaceId])

    
    return (
        <View style={styles.container}>
            <MapView
                ref={map}
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8,
                }}>

                {/* for each palces render one marker on the map: can use de map funtion from js witch 
            the loops for one array and tranform it to something  */}
                {posts.map(place => (
                    <CustomMarket
                        key={place.id}
                        coordinate={{ latitude: place.latitude, longitude: place.longitude }}
                        price={place.newPrice}
                        isSelected={place.id === selectedPlaceId}
                        onPress={() => setSelectedPlaceId(place.id)}
                    />)
                )}
            </MapView>
            <View style={{ position: 'absolute', bottom: 10 }}>
                {/* <PostCarrouselItem post={places[0]}/> */}
                <FlatList
                    ref={flatlist}
                    data={posts}
                    renderItem={({ item }) => <PostCarrouselItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    // pagingEnabled={Platform.OS === 'android'}
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