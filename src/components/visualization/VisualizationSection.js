
import { connect } from "react-redux";

import MusicLi from '../player/MusicLi';
import Visualizer from "./Visualizer";

function VisualizationSection({ playerData }) {
  return (
    <div className='visualization-section'>
      <ul className='music-data'>
        <MusicLi
          key={playerData.currentSong.id} 
          item={playerData.currentSong} 
        />
      </ul> 
      <Visualizer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    playerData: state.player
  }
};

export default connect(
  mapStateToProps
)
(VisualizationSection);