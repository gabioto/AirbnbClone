import React from 'react';
import {NavigationContainer} from "@react-navigation/native"
import { View } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack"
import DestinationSearchScreen from '../screens/DestinationSearch'
import GuestsScreen from '../screens/Guests'

import HomeTabNavigator from '../navigation/HomeTabNavigator'

const Stack = createStackNavigator();


const Router = (props) => {
  return (
    <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen 
            name={"Home"}
            component={HomeTabNavigator}
            options = {{
                headerShown:false 
            }}
            />
            <Stack.Screen 
            name={"Destination Search"}
            component={DestinationSearchScreen}
            options = {{
                title:"How many people?"
            }}
            />
            <Stack.Screen 
            name={"Guests"}
            component={GuestsScreen}
            options = {{
                title:"How many people?"
            }}
            />
         </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;