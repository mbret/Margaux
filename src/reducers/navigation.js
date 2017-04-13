import StackNavigator from "../containers/stack-navigator";

/**
 * Reducer for React navigation state.nav
 * @link https://reactnavigation.org/docs/guides/redux
 */
const nav = (state, action) => {
    const newState = StackNavigator.router.getStateForAction(action, state);
    return (newState ? newState : state)
};

export {
    nav
};