import React, { useState, useEffect  } from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsMapsScreen from '../screens/SearchResultsMaps';
import { useRoute } from '@react-navigation/native';
import SearchResultsMaps from '../screens/SearchResultsMaps';
import { API, graphqlOperation } from 'aws-amplify'
import { listPosts } from '../graphql/queries'

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
    const [posts, setPosts] = useState([]);

    const route = useRoute();
    const { guests ,viewPort } = route.params
    useEffect(() => {
        //call Data API
        const fetchPosts = async () => {
          try {
            const postsResult = await API.graphql(
              graphqlOperation(listPosts, {
                filter: {
                  and: {
                    maxGuests: {
                      ge: guests,
                    },
                    latitude: {
                      between: [viewPort.southwest.lat,viewPort.northeast.lat], 
                    },
                    longitude: {
                      between: [viewPort.southwest.lng,viewPort.northeast.lng ], 
                    }
                  },
                }
              })
            )
            setPosts(postsResult.data.listPosts.items);
          } catch (e) {
            console.log(e)
          }
        }
        fetchPosts();
      }, [])
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454',
            }
        }}>

            <Tab.Screen name={"list"}>
                {
                    () => (
                        <SearchResultsScreen posts={posts}/>
                    )
                }

            </Tab.Screen>
            <Tab.Screen name={"map"} >
                {
                    () => (
                        <SearchResultsMaps posts={posts}/>
                    )
                }
            </Tab.Screen>

        </Tab.Navigator>
    );
}

export default SearchResultsTabNavigator;