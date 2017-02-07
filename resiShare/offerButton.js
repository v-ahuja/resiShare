import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert
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
        title={this.props.text}
        color={this.props.color}
        accessibilityLabel="Learn more about this purple button"
      />
      </View>
    );
  }
}
