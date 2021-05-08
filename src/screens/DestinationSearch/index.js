import React,{useState} from 'react';
import { View,TextInput,FlatList,Text, Pressable } from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo'
import SearchResults from '../../../assets/data/search'
import {useNavigation} from '@react-navigation/native'

const DestinationSearch = () => { 
    const [inputText,setInputText]  = useState('');
    const navigation = useNavigation()
  return(
    <View style={styles.container}>
        {/* input component */}
        <TextInput
            style={styles.textInput}
            placeholder="Where are you going"
            value={inputText}
            onChangeText={setInputText}
        />
        {/* list of destination   */}
        <FlatList 
            data={SearchResults}
            renderItem={({item})=>(
                <Pressable onPress={()=>navigation.navigate('Guests')} style={styles.row}>
                    <View style={styles.iconContainer}>
                        <Entypo name="location-pin" size={30}/>
                    </View>
                    <Text style={styles.locationText}>{item.description} </Text>
                </Pressable>
                )
               
            }
        />
    </View>
  );
}

export default DestinationSearch;