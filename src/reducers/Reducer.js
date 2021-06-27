const Reducer = (state, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case "EDIT":
      const user = (state.items[action.payload.id - 1] = action.payload);
      return {
        ...state,
        ...state.items,
        user,
      };
    case "REMOVE":
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload)],
      };

    default:
      return state;
  }
};

export default Reducer;
