import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

export default class BookmarkComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      bookmarked : props.bookmarked || false
    };
    console.log("hello");
    console.log(this.state);
  }

  _onPressButton() {
    console.log(this.state);
    this.setState({
      bookmarked : !this.state.bookmarked
    });
  }

  render() {

    if (this.state.bookmarked) {
      return (
        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
          <Image style={{height : 20, width : 20}}
               source={require('./images/star_bookmark_icon.jpg')}/>
        </TouchableHighlight>
      );
    }
    else {
      return (
        <TouchableHighlight onPress={this._onPressButton.bind(this)}>
          <Image style={{height : 20, width : 20}}
               source={require('./images/star_bookmark_icon_transp.png')}/>
        </TouchableHighlight>
      );
    }
    return comp;
  }
}
