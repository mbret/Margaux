import GameSetup from './components/game-setup';
import PlayersSetup from './components/players-setup';
import NewGame from "./components/new-game";
import CardsList from "./components/cards-list";
import GameSetupPlayerSettings from "./containers/game-setup-player-settings";
import { StackNavigator } from 'react-navigation';

export const routes = {
  NewGame: "NewGame",
  GameSetup: "GameSetup",
  CardsList: "CardsList",
  GameSetupPlayerSettings: "GameSetupPlayerSettings",
  PlayersSetup: "PlayersSetup",
};

/**
 * App navigation configuration.
 * @link https://medium.com/@satya164/react-natives-navigationexperimental-with-redux-467acee02756
 */
export const AppNavigator = StackNavigator({
  [routes.NewGame]: {screen: NewGame},
  [routes.GameSetup]: {screen: GameSetup},
  [routes.CardsList]: {screen: CardsList},
  [routes.GameSetupPlayerSettings]: {screen: GameSetupPlayerSettings},
  [routes.PlayersSetup]: {screen: PlayersSetup}
}, {
  navigationOptions: {
    header: {
      style: {backgroundColor: '#3f51b5'},
      titleStyle: {color: 'white'},
      tintColor: 'white'
    }
  }
});