import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style = {{
      	
        flexDirection: 'row',
        height : 20,
        backgroundColor : 'gainsboro'
      }}>
      <Text style = {{flex : 1, textAlign : 'center'}}>{this.props.text}</Text>
      </View>
    );
  }
}