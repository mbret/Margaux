import React, { Component } from 'react'
import { Button, Container, Content, Form, Input, Item, Text, Card, CardItem, Right, Left, Body, Icon, H1, H3 } from 'native-base'

export default class PlayersSetup extends Component {
  static navigationOptions = {
    title: 'Configuration des joueurs'
  };

  render() {
    const { navigate } = this.props.navigation
    return (
      <Container>
        <Content padder>
          <Text>Joueur 1</Text>
          <H1 style={{ marginBottom: 15 }}>Lieux</H1>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Montagne enneigée</Text>
                  <Text note>Avec plein de sapins</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Prairie verdoyante</Text>
                  <Text note>Avec plein d'herbe</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <H1 style={{ marginTop: 15, marginBottom: 15 }}>Personnages</H1>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Dark Vador</Text>
                  <Text note>"Je suis ton père"</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Spider-Man</Text>
                  <Text note>"Votre fidèle serviteur l'araignée"</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>

          <H1 style={{ marginTop: 15, marginBottom: 15 }}>Objets</H1>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Totem sacré</Text>
                  <Text note>Enroulé dans du jambon</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card style={{ marginBottom: 45 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text>Anneau unique</Text>
                  <Text note>Pour les gouverner tous</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
