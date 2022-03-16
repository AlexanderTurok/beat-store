
import { combineReducers } from "redux";

import apiReducer from "./apiData/apiReducer";
import { isPlayingReducer } from "./isPlaying/isPlayingReducer";
import searchItemReducer from "./searchItem/searchItemReducer";
import songReducer from "./song/songReducer";

export const rootReducer = combineReducers({
  items: apiReducer,
  searchItem: searchItemReducer,
  song: songReducer,
  isPlaying: isPlayingReducer
});