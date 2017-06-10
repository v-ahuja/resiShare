import React, { Component } from 'react';
import KeyboardSpacer from 'react-native-keyboard-spacer';

import {
  View,
  Alert,
  Button,
  Modal,
  Dimensions
} from 'react-native';

import Divider from './divider.js';
import ImageViewerSwiper from './imageviewerswiper.js'
import ImagePicker from 'react-native-image-crop-picker';

class ModalDelegate extends Component {
  selectFromRoll = () => {
    Alert.alert("Select from roll pressed");
  }

  addFromCamera = () => {
    Alert.alert("Add from camera");
  }

  render() {
    var {height, width} = Dimensions.get('window');
    const midscreen = height/2;
    return (

        <Modal transparent={true} visible = {this.props.visible}>
          <View style={{marginTop: 122, backgroundColor: '#f5fcff'}}>
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
      modalVisible : false,
      images : []
    };
    this.imageViewSwiper = null;
  }

  updateImages = (images) =>
  {
    console.log(images);
    this.setState({
      images : this.state.images.concat(images)
    });
    this.imageViewSwiper.updateImages(images.map(
      (image) => image.path
    ));
  }

  addImageFromRoll = () => {
    // Alert.alert("Add Image pressed!");
    ImagePicker.openPicker({
      multiple: true
    }).then(images => this.updateImages(images));
  }

  addImageFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => this.updateImages([image]));
  }

  getImagesInfo = () => {
    return this.state.images;
  }

  render () {
    return (
      <View style = {{flex : 1}}>
        <Button
          title="Add Image from Roll"
          onPress={this.addImageFromRoll}
        />
        <Divider/>
        <Button
          title="Add Image from Camera"
          onPress={this.addImageFromCamera}
        />
        <Divider/>
        <ImageViewerSwiper
          ref = { (swiper) => this.imageViewSwiper = swiper}
          imagePaths = {this.state.images}
          retrieveImageCallback={(image) => new Promise(
            function(resolve, reject) {
              resolve(image.path);
            })} />
      </View>
    );
  }
}
