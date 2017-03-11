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

export default class Product extends Component {
  render() {
    return (
      <View>
        <ScrollView style={{marginLeft : 5, marginRight : 5}}>

        <Divider />
        <Header text = 'Beats Headphones XASF13'/>

        <ImageViewerSwiper/>

        <PopularityComponent />

        <Divider />

        <PriceView />

        <Divider />

        <OfferButton text="Contact Seller" color="indigo" />

        <Divider />

        <OfferButton text="Make an Offer!" color="indigo" />

        <Divider />

        <Description />

        <Divider />

        </ScrollView>
      </View>
    );
  }
}
