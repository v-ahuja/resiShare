import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  Keyboard
} from 'react-native';

import Divider from './divider.js';
import Header, { AppHeader } from './header.js';
import ImagePicker from 'react-native-image-crop-picker';

class ImageComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editMode : this.props.editMode
    };
  }

  toggleMode(currentMode) {
    this.setState({editMode : !currentMode });
  }

  render() {
    if (!this.state.editMode) {
      return (
        <TouchableOpacity onPress={this.toggleMode.bind(this, this.state.editMode)}>
          <Image
                 source={require('./images/edit_pencil_crop_icon.png')}
                 style ={{alignSelf : 'flex-end',
                          height : 20,
                          width : 20,
                          right : 5}}
          />
        </TouchableOpacity>
      )
    }
    else {
      return (
        <TouchableOpacity onPress={this.toggleMode.bind(this, this.state.editMode)} >
          <Image
                 source={require('./images/checked_icon.png')}
                 style ={{alignSelf : 'flex-end',
                          height : 20,
                          width : 20,
                          right : 5}}
          />
        </TouchableOpacity>
      )
    }
  }
}

class TitleText extends Component {
  constructor(props) {
    super(props);

    const text = this.props.text !== undefined ?
                    this.props.text : "";

    const editMode = this.props.editMode !== undefined ?
                  this.props.editMode : false;

    this.state = {
      text : text,
      editMode : editMode,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.editMode === false) {
      Keyboard.dismiss();
    }
    else {

    }
  }

  toggleMode(currentMode) {

    this.setState({editMode : !currentMode,
                   text : this.state.text});
  }

  render() {
    const image = this.state.editMode ? require('./images/checked_icon.png') :
                require('./images/edit_pencil_crop_icon.png');

    console.log("editMode : ", this.state.editMode);

    return (
      <View style = {{height : this.props.height}}>

      <View style = {{backgroundColor : '#afcecf',
                      flexDirection : 'row'
                      }}>
        <Text style = {{ fontFamily : 'AmericanTypewriter',
                         fontSize : 20,}}
        >{this.props.titleText}</Text>

        <View style={{flex : 1}}>
          <TouchableOpacity onPress={this.toggleMode.bind(this, this.state.editMode)}>
            <Image
                   source={image}
                   style ={{alignSelf : 'flex-end',
                            height : 20,
                            width : 20,
                            right : 5}}
            />
          </TouchableOpacity>
        </View>


      </View>

      <TextInput
          style={{ flex : 1,
                  fontSize : 17,
                  lineHeight : 25}}
          editable={this.state.editMode}
          multiline={true}
          maxLength={this.props.maxLength}
          autoFocus={this.state.editMode}
          onSubmitEditing={Keyboard.dismiss}
          onChangeText={(text) => this.setState(
                                    {text : text,
                                     editMode : this.state.editMode})}
      />
    </View>
  );
  }
}

export default class AddProduct extends Component {
  constructor(props) {
    super(props);
  }

  pickSingleWithCamera(cropping) {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height},
        images: null
      });
    }).catch(e => alert(e));
  }


  render() {
    return (
      <View style = {{flex : 1}}>
        <AppHeader/>
        <Divider />

        <ScrollView style={{/*flex : 1,*/
                      marginLeft : 5,
                      marginRight : 5
                    }}>

        <TitleText titleText="Title:" height={80} maxLength={80}/>

        <Divider />

        <TitleText titleText="Description:" height={180} maxLength={400}/>

        <Divider />

        <TitleText titleText="Price:" height={60} maxLength={50} />

        <Divider />

        <Button
          onPress={this.pickSingleWithCamera.bind(this,true)}
          title="Add Photos/Images"
          color="#841584"
          accessibilityLabel="Add Photos/Images"
        />

        </ScrollView>

      </View>
    );
  }
}
