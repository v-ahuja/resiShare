import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class PopularityComponent extends Component {
  render() {
    return (
      <View style={{height : 25,
                    flexDirection : 'row',
                    backgroundColor : '#afcecf',
                    alignItems : 'center'
                    }}>

        <Image style={{height : 14, width : 14, left : 5}}
               source={require('./popularity_indicator.jpg')}/>

        <Text adjustsFontSizeToFit = {true}
              style={{flex : 80, left : 16}}>
          10 Views 5 today
        </Text>
        <View style = {{flex : 10 }}>
          <Image style={{height : 25, width : 25}}
               source={require('./bookmark.png')}/>
        </View>
      </View>
    );
  }
}
