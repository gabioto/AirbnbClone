import {Dimensions, StyleSheet} from  'react-native'
const styles = StyleSheet.create({
    container:{
        margin:20
    },
    image:{
        width:'100%', 
        aspectRatio: 3/2, //ancho/alto
        resizeMode:'cover',
        borderRadius: 10,
    },
    bedrooms:{
        marginVertical:10,
        color:'#5b5b5b'
    },
    description:{
        fontSize:18,
        lineHeight:20
    },
    prices:{
        fontSize:18,
        marginVertical:10
    },
    oldPrice:{
        color:'#5b5b5b',
        textDecorationLine:'line-through',
    },
    price:{
        fontWeight:'bold'
    },
    totalPrice:{
        color:'#5b5b5b',
        textDecorationLine:'underline'
    },
    longDescription:{
        fontSize:16,
        lineHeight:20,
        lineHeight:24
    }
});

export default styles;