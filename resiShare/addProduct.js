import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TextInput
} from 'react-native';

import Divider from './divider.js';
import Header, { AppHeader } from './header.js';

class TitleText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text : ''
    };
  }

  render() {
    return (
      <View>

      <View style = {{backgroundColor : '#afcecf'}}>
        <Text style = {{ fontFamily : 'Optima-Bold',
                         fontSize : 20,}}
        >Title:</Text>
      </View>

      <TextInput
          style={{height: 40}}
          multiline={true}
          maxLength={80}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
      />
    </View>
  );
  }
}

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style = {{flex : 1}}>
        <AppHeader/>
        <Divider />

        <View style={{flex : 1,
                      marginLeft : 5,
                      marginRight : 5
                    }}>
        <TitleText />

        </View>

      </View>
    );
  }
}
