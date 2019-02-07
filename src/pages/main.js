import React, {componet} from "react"
import {View,Text,Button} from "react-native"
export default class Main extends componet {
    static navigationOptions = {
        title:'Frota Inteligente'
    }
    render(){
        return (
            <View><Text>FrotaApp</Text>
            <Button onPress= {()=>{this.props.navigation.push('Second')}} ></Button></View>
        )
    }   
}