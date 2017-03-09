/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Navigator
} from 'react-native';

import Product from './product.js';
import Services from './services.js';
import ProductsList from './productslist.js';
import AddProduct from './addProduct.js';

const routes = [
  {
    title : 'Services',
    renderFunc : (navigator) => <Services navigator={navigator} />
  },
  {
    title : 'Marketplace',
    renderFunc : (navigator) => <ProductsList navigator={navigator}/>
  }
]

class Rs extends Component {
  render() {
    return (
        <Navigator
          initialRoute={routes[0]}

          renderScene={(route, navigator) =>
              route.renderFunc(navigator)
            }
        />
        // <ProductsList />
        // <AddProduct />
      );
  }
}

 AppRegistry.registerComponent('resiShare', () => Rs);
