import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};

export default class OfferButton extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row',
                    height : 40,
                    borderWidth : 0.5,
                    justifyContent : 'center'}}>
      <Button
        onPress={onButtonPress}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      </View>
    );
  }
}
