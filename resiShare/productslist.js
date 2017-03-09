import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  Text,
  Dimensions,
  ListView,
  TabBarIOS
} from 'react-native';

import Divider from './divider.js';
import Header, { AppHeader } from './header.js';
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
  render() {
    return (
      <View style = {{flexDirection : 'row',
                      borderWidth  : 1,
                      borderColor : '#afcecf',
                      alignItems : 'center'}}>

          <Image source = {this.props.source}
                style = {{height : 120, width : 120}} />

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
                             text = {rowData.text}/>
                )}/>

      </View>

    );
  };

  render() {
    return (
      <View style = {{flex : 1}}>
        <AppHeader/>
        <Divider />

        <TabBarIOS
          unselectedTintColor="yellow"
          tintColor="black"
          barTintColor='cadetblue'

          >

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
