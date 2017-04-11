import React, { Component } from 'react'
import { Button, Container, Content, Text } from 'native-base'
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

class NewGame extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.navigate = this.props.navigation;
  }

  // Used by ReactNavigation
  static navigationOptions = {
      title: 'Margaux'
  };

  render() {
      return (
          <Container>
              <Content contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}} padder>
                  <View style={styles.container}>
                      <Button large rounded onPress={() => this.props.navigation.navigate('GameSetup')}><Text>Nouvelle partie</Text></Button>
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