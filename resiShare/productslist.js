import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  Dimensions,
  ListView,
  Button,
  TabBarIOS,
  TouchableOpacity
} from 'react-native';

import Divider from './divider.js';
import Product from './product.js';
import SearchBar from 'react-native-search-bar';

const staticData = [
  {
    source : require('./images/beats_1.jpg'),
    text : "Bose X403 Headphones"
  },
  {
    source : require('./images/wooden_table.jpg'),
    text : "Emerald Home T100-0 Chandler Cocktail Table, Wood"
  },
  {
    source : require('./images/oxo_sugar_dispenser.jpg'),
    text : "OXO Good Grips Sugar Dispenser, 2.5 x 5.5-Inch"
  },
  {
    source : require('./images/waffle-maker.jpg'),
    text : "Cuisinart Vertical Waffle Maker"
  },
  {
    source : require('./images/beats_1.jpg'),
    text : "Bose X403 Headphones"
  },
  {
    source : require('./images/wooden_table.jpg'),
    text : "Emerald Home T100-0 Chandler Cocktail Table, Wood"
  },
  {
    source : require('./images/oxo_sugar_dispenser.jpg'),
    text : "OXO Good Grips Sugar Dispenser, 2.5 x 5.5-Inch"
  },
  {
    source : require('./images/waffle-maker.jpg'),
    text : "Cuisinart Vertical Waffle Maker"
  }

]

class RowItem extends Component {

  _onPressButton = () => {
    this.props.navigation.navigate('Product');
  }

  render() {
    // console.log("navigator: ", this.props.navigator);
    return (
      <View style = {{flexDirection : 'row',
                      borderWidth  : 1,
                      borderColor : '#afcecf',
                      alignItems : 'center'}}>

        <TouchableOpacity onPress={this._onPressButton}>

            <Image source = {this.props.source}
                  style = {{height : 120, width : 120}} />

        </TouchableOpacity>

        <Text style = {{ flex : 1 }} >
          {this.props.text}
        </Text>

      </View>
    );
  }
}


export default class ProductsList extends Component {
  constructor() {
    super();

    const ds = new ListView.DataSource(
                {rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      selectedTab : 'buyTab',
      dataSource: ds.cloneWithRows(staticData),
    };

    this._onPressBuyButton = () => {
      this.props.navigation.navigate('AddProduct');
    }
    // console.log("navigator: ", this.props.navigation);
  }

  _renderIcon = (img) => {
      return (
        <Image source = {img}
               style = {{height : 30, width : 30}} />
      );
  };


  _renderBlankTab = () => {
    return (
      <View>
        <SearchBar
          ref='searchBar'
          placeholder='Search'

          onSearchButtonPress={() => this.refs.searchBar.unFocus()}
          onCancelButtonPress={() => this.refs.searchBar.unFocus()}/>

        <Button
          onPress={this._onPressBuyButton}
          title="Add Product"
          accessibilityLabel="See an informative alert"
        />

      </View>
    );
  };

  _renderBuyTab =  () => {
    return (
      <View style={{marginLeft : 5, marginRight : 5}}>

      <SearchBar
        ref='searchBar'
        placeholder='Search'

        onSearchButtonPress={() => this.refs.searchBar.unFocus()}
        onCancelButtonPress={() => this.refs.searchBar.unFocus()}/>

      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData =>
            <RowItem source = {rowData.source}
                     text = {rowData.text}
                     navigation={this.props.navigation}/> )}
      />
      </View>
    );
  };

  render() {

    return (
      <View style = {{flex : 1}}>
        <Divider />

        <TabBarIOS
          unselectedTintColor="yellow"
          tintColor="black"
          barTintColor='cadetblue'>

        <TabBarIOS.Item
          icon = {require('./images/Buy_000000_25.png')}
          title="Buy"
          selected={this.state.selectedTab === 'buyTab'}
          onPress={() => {
            const ds = new ListView.DataSource(
                        {rowHasChanged: (r1, r2) => r1 !== r2});

            this.setState({
              selectedTab: 'buyTab',
              dataSource: ds.cloneWithRows(staticData),
            });
          }}>
          {this._renderBuyTab()}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon = {require('./images/Buy_000000_25.png')}
          title="Sell"
          selected={this.state.selectedTab === 'sellTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'sellTab'
            });
          }}>
          {this._renderBlankTab()}
        </TabBarIOS.Item>

      </TabBarIOS>

      </View>
    );
  }
}
