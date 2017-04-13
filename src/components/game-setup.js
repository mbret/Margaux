import React, { Component } from 'react'
import { Button, Container, Content, Form, ListItem, Item, Text, Toast, Label, List, Body, Separator, Picker, InputGroup, Input, Icon } from 'native-base'
import { routes } from "../routes-config";

export default class GameSetup extends Component {

  static navigationOptions = {
    title: 'Configuration du jeu'
  };

  constructor(props) {
    super(props);
    this.state = {
      numberOfPlayers: "2",
      numberOfPlaces: "1",
      numberOfThings: "2",
      numberOfAdjectives: "3",
      numberOfSentences: "1",
      numberOfVerbs: "2",
      numberOfCharacters: "1",
    };
  }

  /**
   * Field ok -> redirect
   * Fields !ok -> toast
   */
  onContinue() {
    this.props.navigation.navigate(routes.GameSetupPlayerSettings, { number: parseInt(this.state.numberOfPlayers) })
  }

  onChangeText({numberOfPlayers, numberOfPlaces, numberOfThings, numberOfAdjectives, numberOfSentences, numberOfVerbs, numberOfCharacters}) {
    console.log("sdf", numberOfPlayers);
    if (numberOfPlayers !== undefined) {
      this.setState({ numberOfPlayers });
    }
    if (numberOfPlaces !== undefined) {
      this.setState({ numberOfPlaces });
    }
    if (numberOfThings !== undefined) {
      this.setState({ numberOfThings });
    }
    if (numberOfAdjectives !== undefined) {
      this.setState({ numberOfAdjectives });
    }
    if (numberOfSentences !== undefined) {
      this.setState({ numberOfSentences });
    }
    if (numberOfVerbs !== undefined) {
      this.setState({ numberOfVerbs });
    }
    if (numberOfCharacters !== undefined) {
      this.setState({ numberOfCharacters });
    }
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Text>Nombre de joueurs</Text>
              <Picker
                style={{ width: 150 }}
                mode="dropdown"
                selectedValue={this.state.numberOfPlayers}
                onValueChange={(numberOfPlayers) => this.onChangeText({ numberOfPlayers })}>
                {[...Array(10)].map((x, i) =>
                  <Item key={i} label={`${i+1}`} value={`${i+1}`} />
                )}
              </Picker>
            </ListItem>
            <ListItem itemDivider>
              <Text>Règles du jeu</Text>
            </ListItem>
            <ListItem stackedLabel>
              <Label>Nombre de lieux</Label>
              <Picker
                style={{ width: 150 }}
                mode="dropdown"
                selectedValue={this.state.numberOfPlaces}
                onValueChange={(numberOfPlaces) => this.onChangeText({ numberOfPlaces })}>
                {[...Array(10)].map((x, i) =>
                  <Item key={i} label={`${i+1}`} value={`${i+1}`} />
                )}
              </Picker>
            </ListItem>
            <ListItem stackedLabel>
              <Label>Nombre de personnages</Label>
              <Picker
                style={{ width: 150 }}
                mode="dropdown"
                selectedValue={this.state.numberOfCharacters}
                onValueChange={(numberOfCharacters) => this.onChangeText({ numberOfCharacters })}>
                {[...Array(10)].map((x, i) =>
                  <Item key={i} label={`${i+1}`} value={`${i+1}`} />
                )}
              </Picker>
            </ListItem>
            <ListItem stackedLabel>
              <Label>Nombre d'objets</Label>
              <Picker
                style={{ width: 150 }}
                mode="dropdown"
                selectedValue={this.state.numberOfThings}
                onValueChange={(numberOfThings) => this.onChangeText({ numberOfThings })}>
                {[...Array(10)].map((x, i) =>
                  <Item key={i} label={`${i+1}`} value={`${i+1}`} />
                )}
              </Picker>
            </ListItem>
            <ListItem stackedLabel>
              <Label>Nombre d'adjectifs</Label>
              <Picker
                style={{ width: 150 }}
                mode="dropdown"
                selectedValue={this.state.numberOfAdjectives}
                onValueChange={(numberOfAdjectives) => this.onChangeText({ numberOfAdjectives })}>
                {[...Array(10)].map((x, i) =>
                  <Item key={i} label={`${i+1}`} value={`${i+1}`} />
                )}
              </Picker>
            </ListItem>
            <ListItem stackedLabel>
              <Label>Nombre de verbes</Label>
              <Picker
                style={{ width: 150 }}
                mode="dropdown"
                selectedValue={this.state.numberOfVerbs}
                onValueChange={(numberOfVerbs) => this.onChangeText({ numberOfVerbs })}>
                {[...Array(10)].map((x, i) =>
                  <Item key={i} label={`${i+1}`} value={`${i+1}`} />
                )}
              </Picker>
            </ListItem>
            <ListItem stackedLabel>
              <Label>Nombre d'expressions nulles</Label>
              <Picker
                style={{ width: 150 }}
                mode="dropdown"
                selectedValue={this.state.numberOfSentences}
                onValueChange={(numberOfSentences) => this.onChangeText({ numberOfSentences })}>
                {[...Array(10)].map((x, i) =>
                  <Item key={i} label={`${i+1}`} value={`${i+1}`} />
                )}
              </Picker>
            </ListItem>
          </List>
          <Content>
            <Button block onPress={() => this.onContinue()}>
              <Text>Continuer</Text>
            </Button>
          </Content>
        </Content>
      </Container>
    )
  }
}
