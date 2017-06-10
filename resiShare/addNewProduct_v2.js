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

class DBHelper
{
  static transformImagesInfo(productName, locality, imagesInfo)
  {
    return imagesInfo.map((imageInfo, index) => {
      const imageName = `image_${index}`;
      return {
        name : imageName,
        image : imageInfo,
        firebaseStoragePath :
          `${locality}/products/${productName}/images/${imageName}`
      };
    });
  }

  static appendFirebaseStoragePaths(product, images)
  {
    /**
    * @brief Add url paths for all the images the user has supplied for the
    * product. These url paths represent the path of the image, which is stored
    * in firebase storage. The reason for this is that the core product Info
    * (such as name, description, etc.) is stored in a different location from
    * the one used to store larger data such as images.
    *
    * @param product The product to be uploaded to the database.
    * @param images The array of image objects which provide the local path of
    * the asset as well.
    */

    product.mainDisplayPath = images[0].firebaseStoragePath;
    product.productImagePaths = {};
    images.forEach((image) => product.productImagePaths[image.name] =
      image.firebaseStoragePath);

    console.log("Product after enriching it with firebase ",
      "specific image info: ", product);
  }

  static getProductToUpload(productForm, images)
  {
    /**
    * @brief Given the current images (either from the camera or the roll) and
    * the details of the product entered by the user in the form, we're
    * going to create a "product" object, which can be saved to disk.
    *
    * @param productForm An immutable form object with product details such as
    * name, description, etc.
    * @param imagesInfo An array of local image asset objects. The path and
    * content type will be extracted from them.
    *
    * @return A json product object which can be uploaded to remote storage.
    */

    // Grab details from the immutable form object.
    const product = {
      name : productForm.name,
      price : productForm.price,
      description : productForm.description,
      condition : productForm.condition
    };

    // Currently harcoding these. TODO: Make them part of the form so that the
    // user can enter them.
    product.bestOffer = true;
    product.currency = '$';
    product.views = '0';

    // If the user has made any images availabe, for now, we pick the first one
    // to be the "mainDisplayPath". This will be the main image used to represent
    // the product and used in thumb-nails etc.
    if (images.length > 0)
    {
      DBHelper.appendFirebaseStoragePaths(product, images);
    }

    return product;
  }

  static uploadProductFromForm(productForm, imagesInfo)
  {
    const images = DBHelper.transformImagesInfo(productForm.name, "333E54ST", imagesInfo);
    /**
    * The sequence of operations is as follows
    */
    const product = DBHelper.getProductToUpload(productForm, images);

    // First we update the real-time firebase db with the product info.
    DBAccess.updateProducts("123", product);

    images.forEach(image => DBAccess.uploadImage(image.image,
                                                 image.firebaseStoragePath));
  }

} // end of class

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

    const product = {
      name : productForm.name,
      price : productForm.price,
      description : productForm.description,
      condition : productForm.condition
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
      if (product.mainDisplayPath === undefined &&
          uploadedImagesResult.length > 0) {
        product.mainDisplayPath = uploadedImagesResult[0].fullPath;
        console.log("product to update2: ", product);
      }

      if (product.productImagePaths === undefined){
        product.productImagePaths = {};
      }

      uploadedImagesResult.forEach((image) => {
        product.productImagePaths[image.name] = image.fullPath;
      });

      console.log("product to update5: ", product);
      DBAccess.updateProducts("123", product);
    };

    DBAccess.updateImages("333E54ST",
      product.name, images, imageUpload);
  }

  onPressNew = () => {
    const productForm = this.productForm.getValue();
    const imagesInfo = this.addImageComponent.getImagesInfo();

    DBHelper.uploadProductFromForm(productForm, imagesInfo);
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
            <TouchableHighlight style={styles.button} onPress={this.onPressNew} underlayColor='#99d9f4'>
              <Text style={styles.buttonText}>Save</Text>
            </TouchableHighlight>
          </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    );
  }

}
