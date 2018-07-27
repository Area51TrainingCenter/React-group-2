import { FETCH_WEATHER, CLEAN_LIST } from "../actions/index";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return action.payload.data ? [action.payload.data, ...state] : state;
    case CLEAN_LIST:
      return [];
    default:
      return state;
  }
}