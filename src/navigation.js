import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  Navigator
} from 'react-native'
import First from './first.android'
import Second from './second.android'

export default class Navigation extends React.Component {
  render () {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{id: 'first'}}
        renderScene={this.navigatorRenderScene}/>
    )
  }

  navigatorRenderScene (route, navigator) {
    _navigator = navigator
    switch (route.id) {
      case 'first':
        return (<First navigator={navigator} title="first"/>)
      case 'second':
        return (<Second navigator={navigator} title="second"/>)
    }
  }
}

const styles = StyleSheet.create({})