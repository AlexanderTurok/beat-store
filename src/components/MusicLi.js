
import { connect } from "react-redux";
import { setSong } from "../redux/song/songActions";
import { setIsPlaying } from "../redux/isPlaying/isPlayingActions";

import useAudio from "./useAudio";
import share from "../images/share-button.png";
import playButton from "../images/play-button.png";
import pauseButton from "../images/pause-button.png";
import CartImage from '../images/cart.png';

function MusicLi({ item, isPlayingData, setSong, setIsPlaying }) {
  const [playing, toggle] = useAudio(require(`../music/${item.mp3Path}.mp3`));

  const handleClick = () => {
    // setSong sends title of the song to vizualizer
    setSong(item);
    toggle();
    setIsPlaying();
    console.log(isPlayingData.isPlaying)
  }

  return(
    <li className="music-li"
        onClick={() => setSong(item)}>
      <div className="play-image">
        <img className="music-li-el music-li-icon"
             src={require(`../images/${item.picturePath}.jpg`)}/>
        <img className="play-button"
             src={playing ? pauseButton : playButton}
             onClick={handleClick} />
      </div>
      <p className="music-li-el music-li-title">{item.name}</p>
      <p className="music-li-el music-li-p">{item.key}</p>
      <p className="music-li-el music-li-p">{item.bpm}</p>
      <div className="div-tags">
        {item.tags.map((tag) => (
          <p key={tag.id}
             className="music-li-el music-li-tags">
            {tag.name}
          </p>
        ))}
      </div>
      <img className="music-li-el btn-share" src={share}></img>
      <button className="music-li-el btn-add">
        <img className="cart-image"
             src={CartImage}></img>
        ADD
      </button>
    </li>
  );
}

const mapStateToProps = state => {
  return {
    songData: state.song,
    isPlayingData: state.isPlaying
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setSong: (...args) => dispatch(setSong(...args)),
    setIsPlaying: () => dispatch(setIsPlaying())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)
(MusicLi);