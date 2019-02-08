
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,FlatList,Image,TouchableOpacity} from 'react-native';
import {styles} from "../styles/styles";
import api from "../services/api";
export default class Main extends Component {
    static navigationOptions = {
        title:'Home'
    }
    state = {
   response :[]
    }
  componentDidMount(){
    this.ListDate();
  }
  ListDate = async () => {
    const response = await api.get("/list/10");
    console.log(response);
    
    this.setState({response:response.data});
    console.log(`\nstate.response:\n`+this.state.response);
  };
  renderItem = ({item})=>(
    <View style ={styles.itemContainer}>
      <Text style={styles.IdCar} >{item.idReadingFromCar}</Text>
      <Text style={styles.predicted}>{item.predictedValue}</Text>
      <Text style={styles.predicted}>{item.data}</Text>
    </View>
  )
  render() {
    return (
    <View style= {styles.container} >
    <FlatList
          contentContainerStyle = {styles.list}
          data = {this.state.response}
          keyExtractor={(item) => item.idReadingFromCar}
          renderItem= {this.renderItem}
          />
     <TouchableOpacity style={styles.Sbutton} onPress={() => navigation.navigate('About')}>
    <Text style={styles.SbuttonText}>Acesse Scanner OBD II</Text>
    </TouchableOpacity>
    
    </View>

    );
  }
}
 

