
import React, { Component } from 'react';
import MapView from 'react-native-maps'
import { View } from 'react-native';
import Directions from '../services/directions'
import Search from '../services/search';
import { getPixelSize } from "../services/utills";
// import styles from './styles';

export default class MapsPage extends Component {
  state ={
    region: null
  };
  async componentDidMount(){
      navigator.geolocation.getCurrentPosition(
          ({coords:{latitude,longitude}}) => {
            this.setState({
              region : {
                latitude,
                longitude,
                latitudeDelta: 0.0143,
                longitudeDelta: 0.0134
              }
            });
          },
          () => {},
          {
              timeout : 2000,
              enableHighAccuracy: true,
              maximumAge: 1000,
          }
      )
  }
  handleLocationSelected = (data, { geometry }) => {
    const {
      location: { lat: latitude, lng: longitude }
    } = geometry;

    this.setState({
      destination: {
        latitude,
        longitude,
        title: data.structured_formatting.main_text
      }
    });
  };
    render() {
      const {region,destination} = this.setState;
    return (<View>
        <MapView 
        style={{flex : 1}}
        region ={ region}
        showsUserLocation
        loadingEnabled
        ref={el => this.mapView =el}>
        {destination && (
          <Directions
            origin = {region}
            destination = {destination}
            onReady = {result =>{
              this.mapView.fitToCoordinates(result.coordinates,{
                edgePadding: {
                right: getPixelSize(50),
                left: getPixelSize(50),
                top: getPixelSize(50),
                bottom: getPixelSize(50)}
              });
            }}
          />
        )}
        </MapView>
        <Search onLocationSelected = {this.handLocationSelected}/>
    </View>
    );
  }
}