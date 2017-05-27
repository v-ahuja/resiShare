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
import AddProductV2 from './addNewProduct_v2.js'
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
  },
  AddProduct : {
    screen : AddProduct
  },
  AddNewProduct : {
    screen : AddProductV2
  }
};

const AppNavigator = StackNavigator({
  ...stackNavigatorRoutes,
},
{
    initialRouteName : 'Services',
    navigationOptions : {
      headerTitle : 'ResiShare',
      headerStyle : {
        height : 60,
        backgroundColor : 'cadetblue'
      },

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
