import React, { Component } from 'react';
import { connect } from "react-redux";
import { ActionCreators } from "../actions";
import { bindActionCreators } from "redux";
import { Button, Container, Content, Text, Card, CardItem, Left, Body } from 'native-base'
import { Alert } from "react-native";

/**
 *
 */
class PlayerTurn extends Component {

  static navigationOptions = ({ navigation, screenProps }) => {
    console.log(navigation, screenProps)
    const leaveGame = function() {
      Alert.alert(
        'Attention',
        'Vous allez quitter votre partie !',
        [
          {text: 'Nooon !', onPress: () => console.log('Ask me later pressed')},
          {text: 'Oui', onPress: () => navigation.actionCreators.leaveGame()},
        ],
      )
    }
    return {
      title: "Jeu",
      headerRight:
        <Button transparent light iconLeft onPress={() => leaveGame()}>
          <Text>Home</Text>
        </Button>
    }
  }

  /**
   * @param props
   */
  constructor(props) {
    super(props);
    this.currentPlayerIndex = props.gameCurrentPlayerTurnIndex;
    this.currentPlayer = props.gamePlayers[this.currentPlayerIndex];
    this.currentPlayerCardIds = props.gameCards[this.currentPlayerIndex];
  }

  onNext() {
    this.props.endTurn({
      playerIndex: this.currentPlayerIndex
    });
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
          <Button block onPress={ () => this.onNext() }>
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
      gameCurrentPlayerTurnIndex: state.game.currentTurn,
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