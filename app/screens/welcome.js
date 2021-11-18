import React, {Component} from "react";
import {Container, Content, Text} from 'native-base';
import { ImageBackground } from "react-native";
export default class App extends Component {
  render() {
    return (
      <ImageBackground
        style={{flex: 1}}
        source={require('../assets/images/splashscreen.png')}>

      </ImageBackground>
    );
    
  }
}