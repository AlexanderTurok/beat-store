

import { connect } from "react-redux"
import { 
  setCurrentSong,
  setSongsArray,
  togglePlaying,
  toggleRandom,
  toggleRepeat
} from "../redux/audioPlayer/playerActions"


function Controls({ playerData }) {
  // states
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // references
  const audio = useRef('audio_tag');

  // functions
  const formatTime = (sec) => {
    const minutes = ~~(sec / 60);
    const seconds = ~~(sec % 60);

    minutes < 10 ? `$0${minutes}` : minutes;
    seconds < 10 ? `$0${seconds}` : seconds;

    return `${minutes}:${seconds}`
  }

  const handleProgress = (e) => {
    let compute = (e.target.value * dur) / 100;
    setCurrentTime(compute);
    audio.current.currentTime = compute;
  }

  const toggleAudio = () => {
    audio.current.paused ?
      audio.current.play() : audio.current.pause()
  }

  useEffect(() => {
    playerData.playing && toggleAudio();
  }, [currentSong])

  return (
    <div className="audio-player">
      <audio 
        ref={audio}
        preload={true}
        src
      />
    </div>
  )
}



const mapStateToProps = (state) => {
  return {
    playerData: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentSong: () => dispatch(setCurrentSong()),
    toggleRandom: () => dispatch(toggleRandom()),
    toggleRepeat: () => dispatch(toggleRepeat()),
    togglePlaying: () => dispatch(togglePlaying()),
    setSongsArray: () => dispatch(setSongsArray())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls);