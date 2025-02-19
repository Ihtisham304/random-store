export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
        count: state.count + 1,
      };
    default:
      return state;
  }
}
