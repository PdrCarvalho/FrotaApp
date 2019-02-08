import {Platform, StyleSheet, Text, View} from 'react-native';
 export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fafafa',
    },
    list:{
      padding:20 
    },
    itemContainer:{
      backgroundColor : "#FFF",
      borderWidth : 1,
      borderColor : "#DDD",
      borderRadius : 5,
      padding : 2,
     marginBottom : 20 
    },
    IdCar :{
      fontSize:18,
      fontWeight : "bold",
      color :"#333"
    },
    predicted :{
      fontSize :16,
      color :"#999",
      marginTop :5,
      lineHeight :24
    },
    Sbutton:{
    height : 42,
    borderRadius:5,
    borderWidth :2 ,
    borderColor : "#DA552F",
    backgroundColor:"transparent",
    justifyContent : "center",
    alignItems : "center",
    marginTop: 10
    },
    SbuttonText :{
      fontSize: 16,
      color :"#DA552F",
      fontWeight:"bold"
    }
  });
  