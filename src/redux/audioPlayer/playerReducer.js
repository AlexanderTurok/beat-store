import {
  SET_CURRENT_SONG,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  SET_SONGS_ARRAY,
} from './playerTypes';

const initialState = {
  currentSong: 0,
  songslist: song_list,
  repeat: false,
  random: false,
  playing: false,
  audio: null,
}

function playerReducer(state = initialState, action) {
  switch(action.type) {
    case SET_SONGS_ARRAY:
      return {
        ...state,
        songs: action.payload,
      }
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
        playing: true,
      }
    case TOGGLE_RANDOM:
      return {
        ...state,
        random: action.payload,
      }
    case TOGGLE_REPEAT:
      return {
        ...state,
        repeat: action.payload,
      }
    case TOGGLE_PLAYING:
      return {
        ...state,
        playing: action.payload,
      }
    default: return state;
  }
}

export default playerReducer;