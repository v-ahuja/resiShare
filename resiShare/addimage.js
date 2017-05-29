import React, { Component } from 'react';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import {
  View,
  Alert,
  Button,
  Modal
} from 'react-native';

import Divider from './divider.js';
import ImagePicker from 'react-native-image-crop-picker';

class ModalDelegate extends Component {
  selectFromRoll = () => {
    Alert.alert("Select from roll pressed");
  }

  addFromCamera = () => {
    Alert.alert("Add from camera");
  }

  render() {
    return (
        <Modal transparent={false} visible = {this.props.visible}>
          <View style={{marginTop: 122}}>
            <Button
              title="Add Image from roll"
              onPress={this.selectFromRoll}
            />
            <Button
              title="Take image from camera"
              onPress={this.addFromCamera}
            />
          </View>
        </Modal>
    );
  }
}

export default class AddImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible : false
    };
  }

  onPressHandler(){
    // Alert.alert("Add Image pressed!");
    this.setState({
      modalVisible : true
    });
  }

  render () {
    return (
      <View style = {{flex : 1}}>
        <ModalDelegate visible={this.state.modalVisible} />
        <Button
          title="Add Image"
          onPress={this.onPressHandler.bind(this)}
        />
      </View>
    );
  }
}
