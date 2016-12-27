/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Picker,
  ScrollView
} from 'react-native';


export default class resiShare extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! HERRRO
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <View style = {{
        flexDirection: 'row',
        height : 20,
        backgroundColor : '#deb887'}}>
      <Text style = {{textAlign : 'center'}}>
        Beats Headphones XASF13
      </Text>
      </View>
    );
  }
}

class DiffColours extends Component {
  render() {
    return (

          <Picker
              selectedValue = "Red With Black">
            <Picker.item  label = "Red With Black" value = "Red With Black" />
            <Picker.item label = "Blue With Black" value = "Blue With Black" />
          </Picker>
    );
  }
}

// class ScrollComp extends Component {
//   render() {
//     return (

//     );
//   }
// }


class Rs extends Component {
  render() {
    return (
        <View style={{flex : 1, marginLeft : 5, marginRight : 5}}>
        <View style={{height : 20, flexDirection : 'row'}} />
        <Header />
        <View style = {{flexDirection : 'row',
                        overflow : 'hidden'}}
              removeClippedSubviews = {true}>
          <Image
            style = {{ height : 250, width : 250, alignSelf : 'center',
                       overflow : 'hidden'}}
            source={require('./beats.jpeg')}
          Image />
          <Image
            style = {{ height : 250, width : 250, alignSelf : 'center',
                        overflow : 'hidden'}}
            source={require('./beats.jpeg')}
          Image />
          <Image
            style = {{ height : 250, width : 250, alignSelf : 'center',
                        overflow : 'hidden'}}
            source={require('./beats.jpeg')}
          Image />
        </View>
        <DiffColours />
        <Text>Rating 4.5 Stars </Text>
        <Text>Price $150   Condition Brand New   </Text>
        <Text adjustsFontSizeToFit={true}>
        Description: Brand New Beats 2nd series. Rated 2nd on
        list of headphones for 2016. Noise cancellation,
        wireless with Bluetooth 3.0
        </Text>
        </View>
      );
  }
}

class BsVin extends Component {
  render() {
    return (
      <View style={{flex : 1, backgroundColor : '#dcdcdc'}}>
      <Rs />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

//AppRegistry.registerComponent('resiShare', () => resiShare);
// AppRegistry.registerComponent('resiShare', () => rS);
// AppRegistry.registerComponent('resiShare', () => BsVin);


import Swiper from 'react-native-swiper';

var styles1 = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
})

var swiper = React.createClass({
  render: function() {
    return (
      <Swiper style={styles1.wrapper} showsButtons={true}>
        <View style={styles1.slide1}>
          <Text style={styles1.text}>Hello Swiper</Text>
        </View>
        <View style={styles1.slide2}>
          <Text style={styles1.text}>Beautiful</Text>
        </View>
        <View style={styles1.slide3}>
          <Text style={styles1.text}>And simple</Text>
        </View>
      </Swiper>
    )
  }
})

AppRegistry.registerComponent('myproject', () => swiper);
