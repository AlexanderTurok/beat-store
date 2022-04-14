
import { combineReducers } from "redux";

import apiReducer from "./apiData/apiReducer";
import playerReducer from "./audioPlayer/playerReducer";
import searchItemReducer from "./searchItem/searchItemReducer";

export const rootReducer = combineReducers({
  items: apiReducer,
  searchItem: searchItemReducer,
  player: playerReducer
});