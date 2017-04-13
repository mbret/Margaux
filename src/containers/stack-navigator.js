import GameSetup from '../components/game-setup';
import PlayersSetup from '../components/players-setup';
import NewGame from "../components/new-game";
import CardsList from "../components/cards-list";
import GameSetupPlayerSettings from "./game-setup-player-settings";
import PlayerTurn from "./player-turn";
import { StackNavigator } from 'react-navigation';
import { routes } from "../routes-config";

/**
 * App navigation configuration.
 * @link https://medium.com/@satya164/react-natives-navigationexperimental-with-redux-467acee02756
 */
export default StackNavigator({
  [routes.NewGame]: {screen: NewGame},
  [routes.GameSetup]: {screen: GameSetup},
  [routes.CardsList]: {screen: CardsList},
  [routes.GameSetupPlayerSettings]: {screen: GameSetupPlayerSettings},
  [routes.PlayersSetup]: {screen: PlayersSetup},
  [routes.PlayerTurn]: {screen: PlayerTurn}
}, {
  navigationOptions: {
    header: {
      style: {backgroundColor: '#3f51b5'},
      titleStyle: {color: 'white'},
      tintColor: 'white'
    }
  }
});