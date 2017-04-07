import React, { Component } from 'react'
import { Button, Container, Content, Form, Input, Item, Text } from 'native-base'

export default class GameSetup extends Component {
  static navigationOptions = {
    title: 'Configuration du jeu'
  }

  render () {
    const {navigate} = this.props.navigation
    return (
      <Container>
        <Content padder>
          <Form>
            <Content padder>
              <Item>
                <Input placeholder="Nombre de joueurs"/>
              </Item>
            </Content>

            <Content padder>
              <Button block onPress={() => navigate('NewGame')}>
                <Text>Continuer</Text>
              </Button>
            </Content>
          </Form>
        </Content>
      </Container>
    )
  }
}
