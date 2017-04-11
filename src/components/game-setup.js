import React, { Component } from 'react'
import { Button, Container, Content, Form, Input, Item, Text } from 'native-base'

export default class GameSetup extends Component {

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
            <Button block onPress={() => navigate('PlayersSetup')}>
              <Text>Continuer</Text>
            </Button>
          </Content>
        </Content>
      </Container>
    )
  }
}
