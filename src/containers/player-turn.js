import React, { Component } from 'react';
import { connect } from "react-redux";
import { ActionCreators } from "../actions";
import { bindActionCreators } from "redux";
import { Button, Container, Content, Text, Card, CardItem, Left, Body } from 'native-base'

/**
 *
 */
class PlayerTurn extends Component {

  static navigationOptions = {
    title: "Jeu"
  };

  /**
   * @param props
   */
  constructor(props) {
    super(props);
    let currentPlayerIndex = props.navigation.state.params.player;
    this.currentPlayer = props.gamePlayers[currentPlayerIndex];
    this.currentPlayerCardIds = props.gameCards[currentPlayerIndex];
  }

  render() {
    return (
      <Container>
        <Content padder>
          <Text>Tour du { this.currentPlayer.value }</Text>
          {this.currentPlayerCardIds.map((cardId, index) => {
            return (
              <Card key={index}>
                <CardItem>
                  <Left>
                    <Body>
                    <Text>{this.props.expressions[this.props.cards[cardId].expressionId].value}</Text>
                    <Text note>{this.props.categories[this.props.cards[cardId].categoryId].name}</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            )
          })}
          <Button block>
            <Text>Suivant</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default connect(
  // Map state to props
  (state) => {
    return {
      gamePlayers: state.game.players,
      gameCards: state.game.cards,
      expressions: state.expressions,
      categories: state.categories,
      cards: state.cards
    };
  },
  // Map dispatch to props
  (dispatch) => bindActionCreators(ActionCreators, dispatch)
)(PlayerTurn);