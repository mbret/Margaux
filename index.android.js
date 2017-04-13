import { AppRegistry } from 'react-native'
import { Root } from "./src/root";

import state from "./src/resources/example-state"
import normalizedState from "./src/resources/example-state-normalized"

console.info('example of current un-normalized state', state);
console.info('example of normalized state', normalizedState);

AppRegistry.registerComponent('Margaux', () => Root)