import React, { Component } from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

const styles = {
	default : {
		height : 20,
		flexDirection : 'row'
	}
};

export default class Divider extends Component {
	render() {
		return (
			<View style={styles.default} {...this.props} />
		);
	}
}