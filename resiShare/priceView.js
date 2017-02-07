import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';


export default class PriceView extends Component {
  render() {
    return (
      <View style={{flex : 1,
                    backgroundColor : '#afcecf',
                    borderWidth : 0.5,
                    }}>

        <View style={{height : 4}} />

        <Text style = {{ fontSize : 20, flex : 1,
            left : 5
              }}
              fontWeight='bold' >
            Price:
            <Text style = {{color : 'crimson',
                            fontSize : 20}}
                  fontWeight='bold'>
                  {" $120 or best offer"}
            </Text>
        </Text>
        <Text style = {{ fontSize : 13,
                         flex : 0.8,
                         left : 5 }}
                         fontWeight='bold' >
            Condition:
            <Text style = {{color : 'slategrey'}}
                            fontWeight = 'bold'>
              {" Lightly Used"}
            </Text>
        </Text>

        <View style={{height : 3}} />
      </View>
    );
  }
}

const stylesheets = {
  old_view : {
    height : 34,
    flexDirection : 'row',
    backgroundColor : '#afcecf',
    borderWidth : 0.5,
    alignItems : 'center'
  },
};
