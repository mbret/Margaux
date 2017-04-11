import React, { Component } from 'react';
import { connect } from "react-redux";
import { addNavigationHelpers } from 'react-navigation';
import { Button, Container, Content, Form, Input, Item, Text, Label, Icon, Toast } from 'native-base'
import { bindActionCreators } from "redux";
import { ActionCreators } from "../actions";

/**
 * GameSetupPlayerSettings
 */
class GameSetupPlayerSettings extends Component {

  static navigationOptions = {
    title: "Configuration des joueurs"
  };

  constructor(props) {
    super(props);

    console.log(props);
    // initial state
    this.state = {
      form: {
        valid: false,
        names: []
      },
      valid: false
    };
    for (let i = 0; i < props.game.nbPlayers; i++) {
      this.state.form.names.push({
        value: `Joueur ${i}`,
        valid: false
      });
    }
  }

  onChangeText(index, text) {
    // as we need to rely on prevState, we use async function.
    this.setState((prevState, props) => {
      let names = prevState.form.names;
      names[index].value = text;
      return {
        form: { names: names }
      };
    });
  }

  onPlaySubmit() {
    let valid = true;
    // validate fields
    this.state.form.names.forEach((field) => {
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
        players: this.state.form.names.map(({value}) => { return {value} })
      });
      // @todo go to next view
    }
  }

  render() {
    let inputs = [];
    for (let i = 0; i < this.props.game.nbPlayers; i++) {
      inputs.push(
        <Item inlineLabel key={i}>
          <Label>{`Joueur ${i+1}`}</Label>
          <Input success={true} value={this.state.form.names[i].value} onChangeText={(text) => this.onChangeText(i, text)} />
        </Item>
      );
    }

    return (
      <Container>
        <Content>
          <Form>
            {inputs}
            <Button block style={{}} onPress={() => this.onPlaySubmit()}>
              <Text>Jouer</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    )
  }
}

export default connect(
  (state) => {
    return {
      cards: state.cards,
      game: {
        // @todo dev only, should come from store
        nbPlayers: 1,
        nbCardsPerCategories: {
          [Object.keys(state.categories)[0]]: 1, // 1 card from category 1
          [Object.keys(state.categories)[0]]: 2, // 2 cards from category 2
        }
      }
    }
  },
  (dispatch) => { return bindActionCreators(ActionCreators, dispatch); }
)(GameSetupPlayerSettings);