const waterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_WATER":
      return action.payload ?? 0;
    case "ADD_WATER":
      return state + action.payload;
    case "REMOVE_WATER":
      return 0;
    default:
      return state;
  }
};

export default waterReducer;
