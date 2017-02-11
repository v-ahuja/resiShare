import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image
} from 'react-native';

import Swiper from 'react-native-swiper';

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

export default class ImageViewerSwiper extends Component {
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
              source={require('./images/beats_1.jpg')} />
          </View>
          <View style={ImageStyles.slide}>
            <Image resizeMode='cover' style={ImageStyles.image}
              source={require('./images/beats_2.jpg')} />
          </View>
          <View style={ImageStyles.slide}>
            <Image resizeMode='cover' style={ImageStyles.image}
              source={require('./images/beats_3.jpg')} />
          </View>
          <View style={ImageStyles.slide}>
            <Image resizeMode='cover' style={ImageStyles.image}
              source={require('./images/beats_4.jpg')} />
          </View>
          <View style={ImageStyles.slide}>
            <Image resizeMode='cover' style={ImageStyles.image}
              source={require('./images/beats_5.jpg')} />
          </View>
        </Swiper>
      </View>
    );
  }
}
