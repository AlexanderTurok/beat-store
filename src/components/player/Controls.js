
import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { 
  setCurrentSong,
  togglePlaying,
  toggleRepeat
} from "../../redux/audioPlayer/playerActions"

function Controls({ playerData, itemsData, setCurrentSong, toggleRepeat, togglePlaying }) {
  // states
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audio = useRef();

  // functions
  const formatTime = (s) => {
    return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + ~~s;
  }

  const handleProgress = (e) => {
    let compute = (e.target.value * duration) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  }

  const toggleAudio = () => {
    audio.current.paused ?
    audio.current.play() : audio.current.pause()
  }

  const handlePlay = () => {
    togglePlaying();
    toggleAudio();
  }

  const handleEnd = (e) => {
    if (playerData.repeat) goToNextSong();
    else if (playerData.currentSong.id === itemsData.items.length - 1) return;
    else goToNextSong();
  }

  const goToNextSong = () => {
    if (playerData.currentSong.id === itemsData.items.length) {
      setCurrentSong(itemsData.items[0])
    } else {
      setCurrentSong(itemsData.items[playerData.currentSong.id])
    }
  }

  const goToPreviousSong = () => {
    if (playerData.currentSong.id === 1) {
      setCurrentSong(itemsData.items[itemsData.items.length - 1])
    } else {
      setCurrentSong(itemsData.items[playerData.currentSong.id - 2])
    }
  }

  useEffect(() => {
    playerData.isPlaying && toggleAudio();
  }, [playerData.currentSong])

  return (
    <div className="audio-player">
      <audio 
        ref={audio}
        preload="true"
        src={require(`../../music/${playerData.currentSong.mp3Path}.mp3`)}
        onEnded={handleEnd}
        onCanPlay={(e) => setDuration(e.target.duration)}
        onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
      />
      <div className="control-buttons">
        <button onClick={goToPreviousSong}>
          Prev Song
        </button>
        <button onClick={goToNextSong}>
          Next Song
        </button>
        <button onClick={handlePlay}>
          {playerData.isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={toggleRepeat}>
          Repeat
        </button>
      </div>
      <input
        type="range"
        id="progressBar"
        value={duration ? (currentTime * 100) / duration : 0}
        onChange={handleProgress}
      />
      <p>Current Time - {formatTime(currentTime)}</p>
      <p>Total Time - {formatTime(duration)}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    playerData: state.player,
    itemsData: state.items
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentSong: (...args) => dispatch(setCurrentSong(...args)),
    toggleRepeat: () => dispatch(toggleRepeat()),
    togglePlaying: () => dispatch(togglePlaying())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);