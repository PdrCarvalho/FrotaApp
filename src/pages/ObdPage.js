import React, {componet} from "react"
import {View,Text} from "react-native"
import {styles} from "../styles/styles"
export default class ObdPage extends componet {
    static navigationOptions = {
        title:'About'
    }
    render(){
        return (
            <View style ={styles.container}><Text  style={styles.IdCar}>Scanner OBD2</Text></View>
        )
    }   
}