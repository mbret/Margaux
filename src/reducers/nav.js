import { AppNavigator } from "../navigation";

/**
 * Reducer for React navigation state.nav
 * @link https://reactnavigation.org/docs/guides/redux
 */
const nav = (state, action) => {
    const newState = AppNavigator.router.getStateForAction(action, state);
    return (newState ? newState : state)
};

export {
    nav
};