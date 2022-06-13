import {
  UPDATE_EVENTS,
  UPDATE_LOCATIONS,
  UPDATE_CURRENT_LOCATION,
} from "./actions";

// moved initial state into this file
const initialState = {
  events: [],
  cart: [],
  cartOpen: false,
  locations: [],
  currentLocation: "",
};

// set initial state as default
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EVENTS:
      return {
        ...state,
        events: [...action.events],
      };

    case UPDATE_LOCATIONS:
      return {
        ...state,
        locations: [...action.locations],
      };

    case UPDATE_CURRENT_LOCATION:
      return {
        ...state,
        currentLocation: action.currentLocation,
      };

    default:
      return state;
  }
};
