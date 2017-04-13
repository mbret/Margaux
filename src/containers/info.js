import React, { Component } from 'react'
import { Container, Content, Text, Card, CardItem, Left, Body } from 'native-base'

export default class Info extends Component {

  static navigationOptions = {
    title: "Information"
  };

  render() {
    return (
      <Container>
        <Content padder>
          <Text>Vous voulez des info ?</Text>
        </Content>
      </Container>
    )
  }
}