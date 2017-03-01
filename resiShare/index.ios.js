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

import Product from './product.js';
import Services from './services.js';
import ProductsList from './productslist.js';
import AddProduct from './addProduct.js';


class Rs extends Component {
  render() {
    return (
        // <Services />
        // <ProductsList />
        <AddProduct />
      );
  }
}

 AppRegistry.registerComponent('resiShare', () => Rs);
