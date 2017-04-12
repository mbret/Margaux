import React, { Component } from 'react'
import { Button, Container, Content, Form, Input, Item, Text } from 'native-base'
import { routes } from "../navigation";

export default class GameSetup extends Component {

  constructor(props) {
    super(props);
    console.log("GameSetup", props);
  }

  static navigationOptions = {
    title: 'Configuration du jeu'
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content padder>
          <Form>
            <Item last>
              <Input placeholder="Nombre de joueurs" />
            </Item>
          </Form>
          <Content style={{ marginTop: 15 }}>
            <Button block onPress={() => navigate(routes.GameSetupPlayerSettings)}>
              <Text>Continuer</Text>
            </Button>
          </Content>
        </Content>
      </Container>
    )
  }
}
