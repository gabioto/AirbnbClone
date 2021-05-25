import React,{useState} from 'react';
import { TextInput, View} from 'react-native';
import styles from './styles';
import SuggestionRow from './SuggestionRow'
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'


const DestinationSearch = () => {
    const [inputText, setInputText] = useState('');
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {/* input component */}
            <View style={{ height: 500 }}>
                <GooglePlacesAutocomplete
                    placeholder='Where are you going?'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details.geometry); 
                        navigation.navigate('Guests',{viewport:details.geometry.viewport})
                        
                    }}
                    fetchDetails
                    query={{
                        key: 'AIzaSyB7oFNjaUcqkITFE1G4Ekw2y8N-Codrn54',
                        language: 'en',
                        types:'(cities)'
                    }}
                    
                    styles={{
                        textInput: styles.textInput,

                    }}

                    renderRow={(item) => <SuggestionRow item={item}/>}
                />
            </View>
            <TextInput
                style={styles.textInput}
                placeholder="Where are you going"
                value={inputText}
                onChangeText={setInputText}
            />
            {/* list of destination   */}
           
        </View>
    );
}

export default DestinationSearch;