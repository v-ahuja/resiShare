import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import BookmarkComponent from './bookmark.js';

function helper_getViews(numViews) {
  return numViews ? numViews : 0;
}

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
          {`${helper_getViews(this.props.views)} Views`}
        </Text>
        <View style = {{flex : 10 }}>
            <BookmarkComponent />
        </View>
      </View>
    );
  }
}
