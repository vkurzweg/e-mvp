// selectLocationState expects a plain JS object for the routing state
const selectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

const selectEvent = (state) => state.get('event');
const selectUser = (state) => state.get('auth');
const selectApp = (state) => state.get('app');
const selectIsAppLoaded = (state) => {
  return state.get('app').get('isAppLoaded');
}



export {
  selectLocationState,
  selectEvent,
  selectIsAppLoaded,
  selectApp,
  selectUser,
};
