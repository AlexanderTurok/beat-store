import {
  SET_CURRENT_SONG,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING,
  SET_SONGS_ARRAY,
} from './playerTypes';

export const setCurrentSong = (data) => {
  return {
    type: SET_CURRENT_SONG,
    payload: data
  }
};

export const toggleRandom = (data) => {
  return {
    type: TOGGLE_RANDOM,
    payload: data
  }
};

export const toggleRepeat = (data) => {
  return {
    type: TOGGLE_REPEAT,
    payload: data
  }
};

export const togglePlaying = (data) => {
  return {
    type: TOGGLE_PLAYING,
    payload: data
  }
};

export const setSongsArray = (data) => {
  return {
    type: SET_SONGS_ARRAY,
    payload: data
  }
};