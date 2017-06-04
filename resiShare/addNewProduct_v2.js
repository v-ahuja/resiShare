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
import AddImage from './addimage.js'
import DBAccess from './firestack.js'

import { NavigationActions } from 'react-navigation';

import * as t from 'tcomb-form-native';

var Form = t.form.Form;

// here we are: define your domain model
var Product = t.struct({
  name : t.String,
  price: t.String,
  description: t.String,  // an optional string
  condition: t.String,    // a required string

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

  onPress = () => {
    /**
    * Collect info
    */
    Alert.alert("button pressed");

    const productForm = this.productForm.getValue();
    const imagesInfo = this.addImageComponent.getImagesInfo();

    console.log("product form:", productForm);
    console.log("image info: ", imagesInfo);



    let product = {
      name : productForm.name,
      price : productForm.price,
      description : productForm.description,
      condiion : productForm.condition
    };
    product.bestOffer = true;
    product.currency = '$';
    product.views = '0';

    const images = imagesInfo.map((imageInfo, index) => {

      return {
        name : `image_${index}`,
        path : imageInfo.path
      };
    });

    const imageUpload = (uploadedImagesResult) => {
      console.log("images from upload: ", uploadedImagesResult);
      if (product.mainDisplayURL === undefined &&
          uploadedImagesResult.length > 0) {
        console.log("product to update1: ", product);
        product.mainDisplayURL = uploadedImagesResult[0].fullPath;
        console.log("product to update2: ", product);
      }

      if (product.productImageURLs === undefined){
        product.productImageURLs = {};
      }
      console.log("product to update3: ", product);

      uploadedImagesResult.forEach((image) => {
        console.log("product to update4: ", product);
        product.productImageURLs[image.name] = image.fullPath;
      });

      console.log("product to update5: ", product);
      DBAccess.updateProducts("123", product);
    };

    DBAccess.updateImages("333E54ST",
      product.name, images, imageUpload);
  }

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
              ref = { (form) => this.productForm = form}
              type={Product}
              options={options}
            />
            <AddImage ref = {(addImageComponent) => this.addImageComponent = addImageComponent}/>
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
