import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Divider from './divider.js'

const AppHeaderColour = 'cadetblue';

export default class Header extends Component {
  render() {
    return (
      <View style = {{
        flexDirection: 'row',
        height : 35,
        backgroundColor : '#afcecf'
      }}>
      <Text style = {{flex : 1, alignSelf : 'center',
                      textAlign : 'center'}}>{this.props.text}</Text>
      </View>
    );
  }
}

export class AppHeader extends Component {
  render() {
    return (
        <View style = {{
          height : 60,
          backgroundColor : AppHeaderColour
        }}>
        <Divider style = {StyleSheets.AppHeaderDivider} />
        <Text style = {StyleSheets.AppText}>ResiShare</Text>
        </View>
    );
  }
}

const StyleSheets = {
  AppHeaderDivider : {
    flex : 2,
    height : 20,
    backgroundColor : AppHeaderColour
  },

  AppText : {
    flex : 2,
    fontFamily : 'Georgia-Bold',
    fontSize : 20,
    textAlign : 'center'
  }
}
