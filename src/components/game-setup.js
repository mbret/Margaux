import React, { Component } from 'react'
import { Button, Container, Content, Form, Input, Item, Text, Toast } from 'native-base'
import { routes } from "../routes-config";

export default class GameSetup extends Component {

  static navigationOptions = {
    title: 'Configuration du jeu'
  };

  constructor(props) {
    super(props);
    this.state = { number: "2" };
  }

  componentWillMount() {
    // @dev
    this.onContinue();
  }

  /**
   * Field ok -> redirect
   * Fields !ok -> toast
   */
  onContinue() {
    if (!this.state.number || this.state.number === "") {
      Toast.show({
        text: "Veuillez choisir un nombre de joueurs",
        position: 'bottom',
        buttonText: 'Ok'
      })
    } else {
      this.props.navigation.navigate(routes.GameSetupPlayerSettings, { number: parseInt(this.state.number) })
    }
  }

  onChangeText(number) {
    this.setState({ number: number });
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Form>
            <Item last>
              <Input placeholder="Nombre de joueurs" value={ this.state.number } keyboardType="numeric" onChangeText={(number) => this.onChangeText(number)} />
            </Item>
          </Form>
          <Content style={{ marginTop: 15 }}>
            <Button block onPress={() => this.onContinue()}>
              <Text>Continuer</Text>
            </Button>
          </Content>
        </Content>
      </Container>
    )
  }
}
