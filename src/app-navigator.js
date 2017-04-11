import GameSetup from './components/game-setup';
import PlayersSetup from './components/players-setup';
import NewGame from "./components/new-game";
import CardsList from "./components/cards-list";
import { StackNavigator } from 'react-navigation';

/**
 * App navigation configuration
 */
const AppNavigator = StackNavigator({
    NewGame: {screen: NewGame},
    GameSetup: {screen: GameSetup},
    CardsList: {screen: CardsList},
    PlayersSetup: {screen: PlayersSetup}
}, {
    navigationOptions: {
        header: {
            style: {backgroundColor: '#3f51b5'},
            titleStyle: {color: 'white'},
            tintColor: 'white'
        }
    }
});

export default AppNavigator;