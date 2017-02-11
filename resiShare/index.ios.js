/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet
} from 'react-native';

import Product from './product.js'

// <Text>Price $150   Condition Brand New   </Text>
class Rs extends Component {
  render() {
    return (
        <Product />
      );
  }
}

 AppRegistry.registerComponent('resiShare', () => Rs);
