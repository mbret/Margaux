import React, { Component } from 'react'
import { Button, Container, Content, Text, Icon, Header, Left, Body, Title, Right } from 'native-base'
import { StyleSheet, View, BackAndroid, Alert } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import * as constants from "../constants";
import { routes } from "../routes-config";

class Home extends React.Component {

  // Used by ReactNavigation
  static navigationOptions = ({ navigation, scree }) => {
    const navigateToInfo = () => {
      navigation.navigate(routes.Info);
    }
    return {
      title: constants.AppName,
      headerRight: <Button transparent light iconLeft onPress={() => navigateToInfo()}><Text>Info</Text></Button>
    }
  }

  constructor(props) {
    super(props);
  }

  onNewGame() {
    this.props.newGame();
  }

  render() {
      return (
          <Container>
              <Content contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}} padder>
                  <View style={styles.container}>
                      <Button style={{marginBottom: 10}} large rounded onPress={() => this.onNewGame()}><Text>Nouvelle partie</Text></Button>
                      <Button large rounded onPress={() => this.props.navigation.navigate('CardsList')}><Text>Liste des cartes</Text></Button>
                  </View>
              </Content>
          </Container>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default connect(
  (state) => { return {}; },
  (dispatch) => bindActionCreators(ActionCreators, dispatch)
)(Home);