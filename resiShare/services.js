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
import ProductsList from './productslist.js'

class Icon extends Component {

  _onPressButton(navigation, text) {
    console.log("navigation", navigation);
    console.log("text: ", text);
    if (text === 'Marketplace') {
      navigation.navigate('ProductsList');
    }
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={
            this._onPressButton.bind(null, this.props.navigation,
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
              navigation={this.props.navigation}
              renderFunc={() => false} />

        <Icon source = {require('./images/cash-icon.png')}
              text = 'Payments/Receipts'
              navigation={this.props.navigation}
              renderFunc={() => false} />

        <Icon source = {require('./images/marketplace-icon.png')}
              text = 'Marketplace'
              navigation={this.props.navigation}
              renderFunc={() => <ProductsList />}/>

        <Icon source = {require('./images/services-icon.png')}
              text = 'Services'
              navigation={this.props.navigation}
              renderFunc={() => false}/>


      </View>
    );

  }
}

export default class Services extends Component {
  render() {
    console.log("navigation Prop: ", this.props.navigation);
    return (
      <View style = {{flex : 1}}>

        <ScrollView style={{marginLeft : 5, marginRight : 5}}>

        <Divider />

        <ImageWithCaption navigation={this.props.navigation} />

        <Divider />

        </ScrollView>
      </View>
    );
  }

}
