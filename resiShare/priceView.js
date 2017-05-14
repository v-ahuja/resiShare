import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const ConditionToStringMap = {
  "light" : "Lightly Used",
  "medium" : "Medium Use",
  "heavy" : "Heavily Used",
  "like new" : "Like New",
  "unused" : "Completely unused"
};

function helper_getPriceLine(currency, price, bestOffer)
{
  let getBestOfferSuffix = () => {
    if (bestOffer) return " or best offer";
    return "";
  }
  return ` ${currency}${price}${getBestOfferSuffix()}`;
}

function helper_getCondition(condition) {
  return condition ? ConditionToStringMap[condition] : "Not provided";
}

export default class PriceView extends Component {
  render() {
    return (
      <View style={{flex : 1,
                    backgroundColor : '#afcecf',
                    borderWidth : 0.5,
                    }}>

        <View style={{height : 4}} />

        <Text style = {{fontSize : 20,
                        flex : 1,
                        left : 5
                      }}
              fontWeight='bold' >
            Price:
            <Text style = {{color : 'crimson',
                            fontSize : 20}}
                  fontWeight='bold'>
                  {helper_getPriceLine(this.props.currency,
                    this.props.price, this.props.bestOffer)}
            </Text>
        </Text>
        <Text style = {{ fontSize : 13,
                         flex : 0.8,
                         left : 5 }}
                         fontWeight='bold' >
            Condition:
            <Text style = {{color : 'slategrey'}}
                            fontWeight = 'bold'>
              {` ${helper_getCondition(this.props.condition)}`}
            </Text>
        </Text>

        <View style={{height : 3}} />
      </View>
    );
  }
}

const stylesheets = {
  old_view : {
    height : 34,
    flexDirection : 'row',
    backgroundColor : '#afcecf',
    borderWidth : 0.5,
    alignItems : 'center'
  },
};
