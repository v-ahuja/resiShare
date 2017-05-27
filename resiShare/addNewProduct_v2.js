import React, { Component } from 'react';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';


// import Divider from './divider.js';
// import ImageList from './multiImageView.js'
// import ImagePicker from 'react-native-image-crop-picker';

import { NavigationActions } from 'react-navigation';

import * as t from 'tcomb-form-native';

var Form = t.form.Form;

// here we are: define your domain model
var Product = t.struct({
  price: t.String,              // a required string
  description: t.String  // an optional string
});

var options = {};

var styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

export default class AddProductV2 extends Component {
  static navigationOptions = ({ navigation, screenProps }) => ({
    headerRight: (
      <Button
        title="Add Product"
        onPress={() => Alert.alert("save pressed")}
      />
    ),
  });

  onPress = () => Alert.alert("button pressed");

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style = {{flex : 1}}>

        <ScrollView style={{/*flex : 1,*/
                      marginLeft : 5,
                      marginRight : 5
                    }}>
          <View style={styles.container}>
            {/* display */}
            <Form
              ref="form"
              type={Product}
              options={options}
            />
            <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableHighlight>
          </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    );
  }

}
