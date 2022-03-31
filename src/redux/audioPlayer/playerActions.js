import {
  SET_CURRENT_SONG,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
} from './playerTypes';

export const setCurrentSong = (data) => {
  return {
    type: SET_CURRENT_SONG,
    payload: data
  }
};

export const toggleRepeat = (data) => {
  return {
    type: TOGGLE_REPEAT,
    payload: data
  }
};

export const togglePlaying = () => {
  return {
    type: TOGGLE_PLAYING
  }
};
