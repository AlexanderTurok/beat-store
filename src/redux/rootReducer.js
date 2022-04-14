
import { combineReducers } from "redux";

import apiReducer from "./apiData/apiReducer";
import playerReducer from "./audioPlayer/playerReducer";


export const rootReducer = combineReducers({
  items: apiReducer,
  player: playerReducer
});