import {Dimensions, StyleSheet} from  'react-native'
const styles = StyleSheet.create({

    image:{
        width:'100%',
        height:500,
        resizeMode:'cover',
        justifyContent:'center',
    },
    title:{
        fontSize:80,
        fontWeight:'bold',
        color:'white',
        width:'70%',
        marginLeft:25   
    },
    button:{
        backgroundColor:'#fff',
        width:200,
        height:40,
        marginLeft:25,
        marginTop:25,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        fontSize:16,
        fontWeight:'bold'
    },
    searchButton:{

        backgroundColor:'#fff',
        height:60,
        width:Dimensions.get('screen').width -20,
        borderRadius:30,
        marginHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
        position:'absolute',
        top:40,
        elevation:100,
    },
    searchButtonText:{
        fontSize:16,
        fontWeight:'bold'
    }
});

export default styles;