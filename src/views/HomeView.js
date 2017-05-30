import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native'
import { Button } from 'react-native-elements'

export default class HomeView extends Component {
  static navigationOptions = {
    title: 'Margaux',
    header: null,
    headerTintColor: 'white',
    headerStyle: {
      backgroundColor: '#039be5'
    },
    headerTitleStyle: {
      fontFamily: 'Kalam-Bold',
      fontWeight: '200'
    }
  }

  render () {
    const {navigate} = this.props.navigation
    return (
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.container}>
          <View style={{flexGrow: 1, justifyContent: 'center'}}>
            <Text style={{fontFamily: 'Kalam-Bold', fontSize: 50, color: 'white'}}>Margaux</Text>
          </View>
          <View style={{flexGrow: 1}}>
            <Button
              backgroundColor='#039be5'
              fontFamily='Kalam-Bold'
              fontSize={30}
              buttonStyle={{borderRadius: 100, margin: 0, padding: 30}}
              title='Nouvelle partie'
              onPress={() => navigate('GameSetup')}/>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#01579b'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    margin: 10,
    padding: 10
  }
})
