import React, { Component } from 'react'
import { Container, Content, Text, Card, CardItem, Left, Body } from 'native-base'
import { connect } from "react-redux";

class CardsList extends Component {

  static navigationOptions = {
    title: "Liste des cartes"
  };

  render() {
    return (
      <Container>
        <Content padder>
          {Object.keys(this.props.cards).map((cardId) => {
            return (
              <Card key={cardId}>
                <CardItem>
                  <Left>
                    <Body>
                    <Text>{this.props.expressions[this.props.cards[cardId].expressionId].value}</Text>
                    <Text note>{this.props.categories[this.props.cards[cardId].categoryId].value}</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            )
          })}
        </Content>
      </Container>
    )
  }
}

export default connect(
  (state) => {
    return {
      cards: state.cards,
      categories: state.categories,
      expressions: state.expressions
    };
  }
)(CardsList);