import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  Dimensions,
} from 'react-native';

import Divider from './divider.js';
import Header, { AppHeader } from './header.js'

class Icon extends Component {

  render() {
    return (
      <View>
        <Image source = {this.props.source}
               style = {{height : 140, width : 140}} />
        <Text style = {{ fontFamily : 'Optima-Regular',
                        fontSize : 17,
                        margin : 10,
                        alignSelf : 'center'}}>
          {this.props.text}
        </Text>
      </View>
    );
  }
}

class ImageWithCaption extends Component {
  render() {
    const {height, width} = Dimensions.get('window');
    console.log(Dimensions.get('window'));
    return (
      <View style = {{flexDirection : 'row',
                      flex : 1,
                      justifyContent : 'space-between',
                      alignItems : 'flex-start',
                      flexWrap : 'wrap' }}>

        <Icon source = {require('./images/maintenance-icon.png')}
              text = 'Maintenance' />

        <Icon source = {require('./images/cash-icon.png')}
              text = 'Payments/Receipts' />

        <Icon source = {require('./images/marketplace-icon.png')}
              text = 'Marketplace' />

        <Icon source = {require('./images/services-icon.png')}
              text = 'Services' />


      </View>
    );

  }
}

export default class Services extends Component {
  render() {
    return (
      <View style = {{flex : 1}}>
        <AppHeader/>

        <ScrollView style={{marginLeft : 5, marginRight : 5}}>

        <Divider />

        <ImageWithCaption />

        <Divider />

        </ScrollView>
      </View>
    );
  }

}
