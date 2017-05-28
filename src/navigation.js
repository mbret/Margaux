import { StackNavigator } from 'react-navigation'

import HomeView from './views/HomeView'
import GameSetupContainer from './views/GameSetupContainer'
import PlayerTurnView from './views/PlayerTurnView'

export default StackNavigator({
  Home: {screen: HomeView},
  GameSetup: {screen: GameSetupContainer},
  PlayerTurn: {screen: PlayerTurnView}
})
