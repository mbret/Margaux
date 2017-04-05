import React, { Component } from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ToolbarAndroid,
  Alert
} from 'react-native'

export default class NewGameView extends React.Component {
  constructor (props) {
    super(props)
    this.game = props.game
    this.state = {nbPlayers: undefined}
  }

  navSecond () {
    this.props.navigator.push({
      index: 1
    })
  }

  onNextButton () {
    this.game.nbPlayers = this.state.nbPlayers
    Alert.alert(JSON.stringify(this.game))
  }

  render () {
    return (
      <View style={styles.container}>
        <ToolbarAndroid style={styles.toolbar}
                        title={this.props.title}
                        titleColor={'#FFFFFF'}/>
        <TouchableHighlight onPress={this.navSecond.bind(this)}>
          <Text>Navigate to second screen</Text>
        </TouchableHighlight>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({nbPlayers: text})}
          value={this.state.text}
          keyboardType="numeric"
        />
        <Text>{this.state.nbPlayers}</Text>
        <Button title="Next" onPress={this.onNextButton.bind(this)}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
})
