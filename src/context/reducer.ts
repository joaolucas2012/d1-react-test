export const initialState = {
  journey: [
    {
      id: null,
      status: null,
      recipients: null,
      name: null,
      success: null,
    },
  ],
  filter: [
    {
      id: null,
      quantity: null,
      name: null,
    },
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_JOURNEY":
      return {
        ...state,
        journey: action.journey,
      };
    case "SET_FILTER":
      return {
        ...state,
        filter: action.filter,
      };
    default:
      return state;
  }
};

export default reducer;
