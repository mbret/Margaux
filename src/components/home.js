import React, { Component } from 'react';
import { connect } from "react-redux";
import { ActionCreators } from "../actions";
import { bindActionCreators } from "redux";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Navigator,
  BackAndroid,
  TouchableHighlight
} from 'react-native';

/**
 *
 */
class Home extends Component {
  render() {
    return(
      <View>
        <View>
          <TouchableHighlight onPress={() => {this.searchPressed() }}>
            <Text>Fetch Recipes</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    a: "foo",
    searchedRecipes: state.searchedRecipes
  };
}

export default connect(mapStateToProps)(Home)