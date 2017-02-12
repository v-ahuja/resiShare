import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';

import Divider from './divider.js';
import Header, { AppHeader } from './header.js'

class ImageWithCaption extends Component {
  render() {
    const {height, width} = Dimensions.get('window');
    console.log(Dimensions.get('window'));
    return (
      <View style = {{flexDirection : 'row',
                      flexWrap : 'wrap'}}>
        <View style = {{flex : 1, minHeight : 140, minWidth : 140}}>
          <Image
            style = {{height : 140, width : 140}}
            source = {require('./images/maintenance-icon.png')}
          />
        </View>
        <View style = {{flex : 1, minHeight : 140, minWidth : 140}}>
          <Image
            style = {{height : 140, width : 140}}
            source = {require('./images/maintenance-icon.png')}
          />
        </View>
        <View style = {{flex : 1, minHeight : 140, minWidth : 140}}>
          <Image
            style = {{height : 140, width : 140}}
            source = {require('./images/maintenance-icon.png')}
          />
        </View>
        <View style = {{flex : 1, minHeight : 140, minWidth : 140}}>
          <Image
            style = {{height : 140, width : 140}}
            source = {require('./images/maintenance-icon.png')}
          />
        </View>
        <View style = {{flex : 1, minHeight : 140, minWidth : 140}}>
          <Image
            style = {{height : 140, width : 140}}
            source = {require('./images/maintenance-icon.png')}
          />
        </View>
      </View>
    );

  }
}

export default class Services extends Component {
  render() {
    return (
      <View>
        <AppHeader/>

        <ScrollView style={{marginLeft : 5, marginRight : 5}}>

        <Divider />

        <ImageWithCaption />

        </ScrollView>
      </View>
    );
  }

}
