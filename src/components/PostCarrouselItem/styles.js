import {Dimensions, StyleSheet} from  'react-native'
const styles = StyleSheet.create({
    container:{
        height:120,
        padding:5,
    },
    innerContainer:{
        flexDirection:'row',
        backgroundColor:'white',
        borderRadius:10,
        overflow:'hidden',
        //todo lo q se muestra fuera del contenedor estara oculto -> hidden

    },
    containerDetails:{
        marginHorizontal: 10,
        flex:1
    },
    image:{
        height:'100%', 
        aspectRatio: 1, //ancho/alto
        resizeMode:'cover',
    },
    bedrooms:{
        marginVertical:10,
        color:'#5b5b5b'
    },
    description:{
        fontSize:16,
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
    }
});

export default styles;