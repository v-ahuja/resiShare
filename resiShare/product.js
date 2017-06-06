import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import Divider from './divider.js';
import Header, { AppHeader } from './header.js'
import PopularityComponent from './popularity.js'
import PriceView from './priceView.js'
import OfferButton from './offerButton.js'
import Description from './description.js'
import ImageViewerSwiper from './imageviewerswiper.js'
import DBAccess from './firestack.js';

export default class Product extends Component {
  render() {
    const navigationParams = this.props.navigation.state.params;
    console.log("Product Info in Product Component: ", navigationParams);
    return (
      <View>
        <ScrollView style={{marginLeft : 5, marginRight : 5}}>

        <Divider />
        <Header text = {navigationParams.name} />

        <ImageViewerSwiper imagePaths = {navigationParams.productImagePaths}
            retrieveImageCallback = {
              (imgPath) => DBAccess.getImageFromPath(imgPath)
                .then((uri) => uri.url)
                .catch(() => "")
            }/>

        <PopularityComponent views = {navigationParams.views}/>

        <Divider />

        <PriceView price = {navigationParams.price}
                   currency = {navigationParams.currency}
                   bestOffer = {navigationParams.bestOffer}
                   condition = {navigationParams.condition}/>
        <Divider />

        <OfferButton text="Contact Seller" color="indigo" />

        <Divider />

        <OfferButton text="Make an Offer!" color="indigo" />

        <Divider />

        <Description description = {navigationParams.description} />

        <Divider />

        </ScrollView>
      </View>
    );
  }
}
