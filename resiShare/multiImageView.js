import React, { Component } from 'react';

import {
  View,
  Image,
  ListView
} from 'react-native';

// class ColumnItem extends Component {
//   return (
//     <View style = {{flexDirection : 'row',
//                     borderWidth  : 1,
//                     borderColor : '#afcecf',
//                     alignItems : 'center'}}>
//
//       <Image source = {this.props.source}
//             style = {{height : 120, width : 120}} />
//     </View>
// }

export default class ImageList extends Component {
  constructor(props) {
    super(props);

    this.ds = new ListView.DataSource(
                {rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: this.ds.cloneWithRows(this.props.images),
    };
  }

  render() {
    return (
      <View style = {{flex : 1}}>
        <ListView
          horizontal={true}
          dataSource={this.ds.cloneWithRows(this.props.images)}
          renderRow={(rowData =>
              <Image source = {{uri : rowData.source}}
                     style = {{height : 120, width : 120}} />
          )}
        />
      </View>
    );
  }
}
