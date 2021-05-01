import React,{useState} from 'react';
import { Pressable, Text, View } from 'react-native';

import styles from './styles';

const Guests = () => {
    const [adults, setAdults] = useState(0);
    const [children, setChildren] = useState(0);
    const [infants, setInfants] = useState(0);
  return (
    <View>
        <View style={styles.row}>
            {/* Titles */}
            <View>
                <Text style={{fontWeight:'bold'}}>Adults</Text>
                <Text style={{color:'#8d8d8d'}}>Ages 13 or above</Text>
            </View>
            {/* Buttons with value */}
            <View style={{
                flexDirection:'row',
                alignItems:'center'
            }}>
                {/* - */}
                <Pressable 
                    onPress={()=> setAdults(Math.max(0, adults-1))}
                    style={styles.button}
                >
                    <Text style={{fontSize:20,color:'#474747'}}>-</Text>
                </Pressable>
                {/* value */} 
                <Text style={{marginHorizontal:20,fontSize:17}}>{adults}</Text>
                {/* + */}
                <Pressable 
                    onPress={()=>setAdults(adults+1)}
                    style={styles.button}
                >
                    <Text style={{fontSize:20,color:'#474747'}}>+</Text>
                </Pressable>
            </View>
        </View>
        <View style={styles.row}>
            {/* Titles */}
            <View>
                <Text style={{fontWeight:'bold'}}>Children</Text>
                <Text style={{color:'#8d8d8d'}}>Ages 2-12 or above</Text>
            </View>
            {/* Buttons with value */}
            <View style={{
                flexDirection:'row',
                alignItems:'center'
            }}>
                {/* - */}
                <Pressable 
                    onPress={()=> setChildren(Math.max(0, children-1))}
                    style={styles.button}
                >
                    <Text style={{fontSize:20,color:'#474747'}}>-</Text>
                </Pressable>
                {/* value */} 
                <Text style={{marginHorizontal:20,fontSize:17}}>{children}</Text>
                {/* + */}
                <Pressable 
                    onPress={()=>setChildren(children+1)}
                    style={styles.button}
                >
                    <Text style={{fontSize:20,color:'#474747'}}>+</Text>
                </Pressable>
            </View>
        </View>
        <View style={styles.row}>
            {/* Titles */}
            <View>
                <Text style={{fontWeight:'bold'}}>Infants</Text>
                <Text style={{color:'#8d8d8d'}}>Under 2</Text>
            </View>
            {/* Buttons with value */}
            <View style={{
                flexDirection:'row',
                alignItems:'center'
            }}>
                {/* - */}
                <Pressable 
                    onPress={()=> setInfants(Math.max(0, infants-1))}
                    style={styles.button}
                >
                    <Text style={{fontSize:20,color:'#474747'}}>-</Text>
                </Pressable>
                {/* value */} 
                <Text style={{marginHorizontal:20,fontSize:17}}>{infants}</Text>
                {/* + */}
                <Pressable 
                    onPress={()=>setInfants(infants+1)}
                    style={styles.button}
                >
                    <Text style={{fontSize:20,color:'#474747'}}>+</Text>
                </Pressable>
            </View>
        </View> 
   
    </View>
  );
}

export default Guests;