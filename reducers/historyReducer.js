const historyReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_HISTORY":
      return action.payload;
    case "ADD_TO_HISTORY":
      const newEntry = {
        id: Date.now(), 
        amount: action.payload,
        date: new Date().toLocaleDateString("uk-UA"), 
        time: new Date().toLocaleTimeString("uk-UA", {
          hour: "2-digit",
          minute: "2-digit",
        }), 
        timestamp: Date.now(), 
      };
      return [newEntry, ...state]; 

    case "CLEAR_HISTORY":
      return [];
    default:
      return state;
  }
};

export default historyReducer;
