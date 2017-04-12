import React, { Component } from 'react'
import { Button, Container, Content, Form, Input, Item, Text, Toast } from 'native-base'
import { routes } from "../navigation";

export default class GameSetup extends Component {

  static navigationOptions = {
    title: 'Configuration du jeu'
  };

  constructor(props) {
    super(props);
    this.state = { number: null };
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
      this.props.navigation.navigate(routes.GameSetupPlayerSettings, { number: this.state.number })
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
              <Input placeholder="Nombre de joueurs" keyboardType="numeric" onChangeText={(number) => this.onChangeText(number)} />
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
