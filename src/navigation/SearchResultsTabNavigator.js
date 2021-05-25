import React, { useState } from 'react';
import { View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import SearchResultsScreen from '../screens/SearchResults';
import SearchResultsMapsScreen from '../screens/SearchResultsMaps';
import { useRoute } from '@react-navigation/native';
import SearchResultsMaps from '../screens/SearchResultsMaps';

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = () => {
    const route = useRoute();
    console.log(route)
    const { guests } = route.params
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
                        <SearchResultsScreen guests={guests} />
                    )
                }

            </Tab.Screen>
            <Tab.Screen name={"map"} >
                {
                    () => (
                        <SearchResultsMaps guests={guests} />
                    )
                }
            </Tab.Screen>

        </Tab.Navigator>
    );
}

export default SearchResultsTabNavigator;