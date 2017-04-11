import React, { Component } from 'react';
import { connect } from "react-redux";
import { addNavigationHelpers } from 'react-navigation';
import { Button, Container, Content, Form, Input, Item, Text, Label, Icon, Toast } from 'native-base'

/**
 * GameSetupPlayerSettings
 */
class GameSetupPlayerSettings extends Component {

  static navigationOptions = {
    title: "Configuration des joueurs"
  };

  constructor(props) {
    super(props);

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

export default connect((state) => { return {
  game: {
    nbPlayers: 5 // @todo dev only, should come from store
  }
} })(GameSetupPlayerSettings);