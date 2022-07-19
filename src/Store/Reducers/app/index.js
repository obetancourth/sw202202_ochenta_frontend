const defaultValue = {
  isLoading: false,
  appLoaded: false,
}

const reducer = (state = defaultValue, action = { type: "NONE", payload: null }) => {
  const { type, payload } = action;
  switch (type) {
    default:
      return state;
  }
}

export default reducer;
