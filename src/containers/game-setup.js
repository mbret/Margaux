import React, { Component } from 'react'
import { Button, Container, Content, Form, ListItem, Item, Text, Toast, Label, List, Left, Right, Body, Separator, Picker, InputGroup, Input, Icon } from 'native-base'
import { routes } from "../routes-config";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";
import { connect } from "react-redux";

class GameSetup extends Component {

  static navigationOptions = {
    title: 'Configuration du jeu'
  };

  /**
   * @param {Object} props
   * @param {Array} props.cards - List of cards, we need to pass it to create the game.
   * @param {Object} props.nbCardsPerCategories - Rule needed to dispatch the cards when creating the game.
   * @param {number} props.navigation.state.params.number - Number of player, from route parameter.
   * @todo for now we get the number of players as route param but we could use state
   */
  constructor(props) {
    super(props);
    this.state = {
      players: [
        { value: "Joueur 1" }
      ],
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
    let valid = true;

    // validate fields
    this.state.players.forEach((field) => {
      if (!field.value || field.value === "") {
        valid = false;
      }
    });

    if (!valid) {
      Toast.show({
        text: "Noms des joueurs incorrects",
        position: 'bottom',
        buttonText: 'Ok'
      })
    } else {
      this.props.startGame({
        nbCardsPerCategories: this.props.nbCardsPerCategories,
        cards: this.props.cards,
        players: this.state.players.map(({value}) => { return {value} })
      });
    }
    // this.props.navigation.navigate(routes.GameSetupPlayerSettings, { number: parseInt(this.state.players.length) })
  }

  onPlayerNameChange(index, text) {
    // as we need to rely on prevState, we use async function.
    this.setState((prevState, props) => {
      let players = prevState.players;
      players[index].value = text;
      return {
        players
      };
    });
  }

  onChangeText({numberOfPlaces, numberOfThings, numberOfAdjectives, numberOfSentences, numberOfVerbs, numberOfCharacters}) {
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

  addPlayer() {
    this.setState((prevState) => {
      return {
        players: [ ...prevState.players, { value: `Joueur ${prevState.players.length + 1}`} ]
      }
    });
  }

  removePlayer() {
    if (this.state.players.length === 1) {
      return;
    }
    this.setState((prevState) => {
      return {
        players: prevState.players.slice(0, prevState.players.length - 1)
      }
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>Liste de joueurs</Text>
            </ListItem>
            {[...Array(this.state.players.length)].map((x, i) =>
              <ListItem key={i}>
                <Label>{`Joueur ${i+1}`}</Label>
                <Input success={true} value={this.state.players[i].value} onChangeText={(text) => this.onPlayerNameChange(i, text)} />
              </ListItem>
            )}
            <ListItem>
              <Button onPress={() => this.addPlayer()}><Text>+</Text></Button>
              <Button onPress={() => this.removePlayer()}><Text>-</Text></Button>
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

export default connect(
  (state) => {
    return {
      cards: state.cards,
      // @todo dev only, should come from store
      nbCardsPerCategories: {
        [Object.keys(state.categories)[0]]: 1, // 1 card from category 1
        [Object.keys(state.categories)[0]]: 2, // 2 cards from category 2
      }
    }
  },
  (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }
)(GameSetup)