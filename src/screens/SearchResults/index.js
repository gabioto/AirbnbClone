import React from 'react';
import { FlatList, Text, View} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles'
import Post from '../../components/Post'
import feed from '../../../assets/data/feed'

const SearchResultsScreen = (props) => {
  return(
    <View>
        <FlatList
            data={feed}
            renderItem={({item}) => <Post post={item}/>}
        />       
    </View>
  );
};

export default SearchResultsScreen;