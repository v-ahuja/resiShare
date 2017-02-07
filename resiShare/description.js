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
{"Quiet Comfort 35 wireless headphones are engineered with world-class noise cancellation that makes quiet sound quieter and music sound better. Free yourself from wires and connect easily to your devices with Bluetooth and NFC pairing. Volume-optimized EQ gives you balanced audio performance at any volume, while a noise-rejecting dual microphone provides clear calls, even in windy or noisy environments. Voice prompts and intuitive controls make communicating and controlling your music hassle-free. A lithium-ion battery gives you up to 20 hours of wireless play time per charge. And if you anticipate a situation where charging may not be possible, just plug in the included audio cable. Wired mode gives you up to 40 hours of play time per charge. Premium materials make these headphones lightweight and comfortable for all-day listening. Use the Bose Connect app for a more personalized experience. Included: Quiet Comfort 35 wireless headphones; USB charging cable; backup audio cable; airline adapter; carry case."}
        </Text>

      </View>
    );
  }
}
