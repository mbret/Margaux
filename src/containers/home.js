import React, { Component } from 'react'
import { Button, Container, Content, Text } from 'native-base'
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";

class Home extends Component {

  // Used by ReactNavigation
  static navigationOptions = {
    title: 'Margaux'
  };

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