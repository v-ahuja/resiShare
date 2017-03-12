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
import {StackNavigator} from 'react-navigation';

const routes = [
  {
    title : 'Services',
    renderFunc : (navigator) => <Services navigator={navigator} />
  },
  {
    title : 'Marketplace',
    renderFunc : (navigator) => <ProductsList navigator={navigator}/>
  }
];

const stackNavigatorRoutes = {
  Services : {
    screen : Services,
  },
  ProductsList : {
    screen : ProductsList
  },
  Product : {
    screen : Product
  }
};

const AppNavigator = StackNavigator({
  ...stackNavigatorRoutes,
},
{
    initialRouteName : 'Services',
    navigationOptions : {
        header : {
          style : {
            height : 60,
            backgroundColor : 'cadetblue'
          },
          title : 'ResiShare'
        }
    }
});

class Rs extends Component {
  render() {
    return (
        <AppNavigator />
        // <ProductsList />
        // <AddProduct />
      );
  }
}

 AppRegistry.registerComponent('resiShare', () => Rs);
