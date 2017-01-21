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

import Swiper from 'react-native-swiper';
import Divider from './divider.js';
import Header, { AppHeader } from './header.js'
import PopularityComponent from './popularity.js'

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

const ImageStyles =
{
    slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    alignItems : 'center'
  },

  image: {
    height : 200,
    width : 200
  },

  dotStyle : {
    backgroundColor: 'rgba(0,0,0,.2)',
    width: 5,
    height: 5,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    alignSelf : 'center',
    alignItems : 'center'
  },

  // To change the layout of the dots in the 'Swiper' component
  paginationStyle : {
    bottom: -23,
    left: null,
    right: 10
  }
};

class ImageViewerSwiper extends Component {
  render() {
    return (
      <View style={{height : 290, alignItems : 'center'}}>
        <Swiper height={275}
          onMomentumScrollEnd={(e, state, context) => console.log('index:', state.index)}
          dot={<View style={ImageStyles.dotStyle} />}
          activeDot={<View style={{backgroundColor: '#000', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          showsButtons = {true}
          >
          <View style={ImageStyles.slide}>
            <Image resizeMode='cover' style={ImageStyles.image}
              source={require('./beats.jpeg')} />
          </View>
          <View style={ImageStyles.slide}>
            <Image resizeMode='cover' style={ImageStyles.image}
              source={require('./beats.jpeg')} />
          </View>
          <View style={ImageStyles.slide}>
            <Image resizeMode='cover' style={ImageStyles.image}
              source={require('./beats.jpeg')} />
          </View>
        </Swiper>
      </View>
    );
  }
}

class PriceView extends View {
  render() {
    return (
      <View style={{height : 20,
                    flexDirection : 'row',
                    backgroundColor : 'gainsboro',
                    borderWidth : 0.5}}>
        <Text
              fontWeight='bold' >
            Price :
        </Text>
        <Text >
              $120 or best offer
        </Text>

      </View>
    );
  }
}

// <Text>Price $150   Condition Brand New   </Text>
class Rs extends Component {
  render() {
    return (
        <View>
          <AppHeader/>
          <View style={{flex : 1, marginLeft : 5, marginRight : 5}}>

          <Divider />
          <Header text = 'Beats Headphones XASF13'/>

          <ImageViewerSwiper/>
          <PopularityComponent />
          <Divider />

          <PriceView />

          <Text adjustsFontSizeToFit={true}>
          Description: Brand New Beats 2nd series. Rated 2nd on
          list of headphones for 2016. Noise cancellation,
          wireless with Bluetooth 3.0
          </Text>

          </View>
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
 AppRegistry.registerComponent('resiShare', () => Rs);
// AppRegistry.registerComponent('resiShare', () => BsVin);




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

// AppRegistry.registerComponent('resiShare', () => swiper);
