import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';

import Divider from './divider.js';
import Header, { AppHeader } from './header.js'
import ProductsList from './productslist.js'

class Icon extends Component {

  _onPressButton(navigator, text) {
    console.log("navigator", navigator);
    console.log("text: ", text);
    if (text === 'Marketplace') {
      navigator.push({
        title : 'Marketplace',
        renderFunc : (navigator) => <ProductsList navigator={navigator}/>
      });
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={
            this._onPressButton.bind(null, this.props.navigator,
                                     this.props.text)}>
          <Image source = {this.props.source}
                 style = {{height : 140, width : 140}} />
        </TouchableOpacity>

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
              text = 'Maintenance'
              navigator={this.props.navigator}
              renderFunc={() => false} />

        <Icon source = {require('./images/cash-icon.png')}
              text = 'Payments/Receipts'
              navigator={this.props.navigator}
              renderFunc={() => false} />

        <Icon source = {require('./images/marketplace-icon.png')}
              text = 'Marketplace'
              navigator={this.props.navigator}
              renderFunc={() => <ProductsList />}/>

        <Icon source = {require('./images/services-icon.png')}
              text = 'Services'
              navigator={this.props.navigator}
              renderFunc={() => false}/>


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

        <ImageWithCaption navigator={this.props.navigator} />

        <Divider />

        </ScrollView>
      </View>
    );
  }

}
