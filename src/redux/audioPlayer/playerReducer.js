import {
  SET_CURRENT_SONG,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING
} from './playerTypes';

const initialState = {
  currentSong: {
    "id": 0,
    "bpm": 96,
    "key": "A#",
    "name": "We are the champions",
    "wavPath": "we-are-the-champions",
    "mp3Path": "we-are-the-champions",
    "picturePath": "we-are-the-champions",
    "tags": [{"name": "queen"},
             {"name": "rock"}]
  },
  repeat: false,
  isPlaying: false
}

function playerReducer(state = initialState, action) {
  switch(action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
        isPlaying: true,
      }
    case TOGGLE_REPEAT:
      return {
        ...state,
        repeat: action.payload,
      }
    case TOGGLE_PLAYING:
      return {
        ...state,
        isPlaying: state.isPlaying ? false : true,
      }
    default: return state;
  }
}

export default playerReducer;