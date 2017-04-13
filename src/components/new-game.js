import React, { Component } from 'react'
import { Button, Container, Content, Text } from 'native-base'
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";
import { routes } from "../routes-config";

class NewGame extends Component {

  // Used by ReactNavigation
  static navigationOptions = {
    title: 'Margaux'
  };

  constructor(props) {
    super(props);
    console.log(props);
  }

  componentWillMount() {
    // @todo dev
    // this.props.navigation.navigate("GameSetup")
    // this.props.navigation.navigate(routes.GameSetupPlayerSettings);
  }

  render() {
      return (
          <Container>
              <Content contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}} padder>
                  <View style={styles.container}>
                      <Button style={{marginBottom: 10}} large rounded onPress={() => this.props.navigation.navigate('GameSetup')}><Text>Nouvelle partie</Text></Button>
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
  (dispatch) => { return {}; }
)(NewGame);