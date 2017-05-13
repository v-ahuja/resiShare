import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Description extends Component {
  render() {
    return (
      <View style = {{
        flex : 1,
        backgroundColor : '#afcecf'
      }}>

      <View style={{height : 5}} />

      <Text style = {{ fontFamily : 'Optima-Bold',
                       fontSize : 20,
                       flex : 1,
                       marginTop : 10,
                       marginLeft : 10,
                       marginRight : 10,

                     }}
             >
          {"Description"}
      </Text>

        <Text style = {{ fontFamily : 'Optima-Regular',
                        fontSize : 17,
                        flex : 1,
                        margin : 10,
                        lineHeight : 25,
                        alignSelf : 'center'}}>
          {this.props.description}
        </Text>

      </View>
    );
  }
}
