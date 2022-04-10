
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../redux/apiData/apiActions";
import Controls from "./Controls";

import MusicLi from "./MusicLi";

function Strongs() {
  return (
    <li className="music-li">
      <strong className='strong strong-title'>TITLE</strong>
      <strong className='strong strong-key'>KEY</strong>
      <strong className='strong strong-bpm'>BPM</strong>
      <strong className='strong strong-tags'>TAGS</strong>
      <strong className='strong strong-options'>OPTIONS</strong>
    </li>
  );
}

function MusicList({ itemsData, fetchItems }) {
  const [numOfSongs, setNumOfSongs] = useState(4);
  const loadMoreSongs =() => {
    setNumOfSongs(numOfSongs + 4);
  }

  useEffect(() => {
    fetchItems()
  }, [])

  return ( 
    <div className='music-list'>
      <ul className='music-data'>
        <Strongs />
        {itemsData.error ? (<h2>{itemsData.error.message}</h2>) : (
          itemsData.loading) ? (<div>Loading...</div>) : (
            itemsData.items.slice(0, numOfSongs).map((item) => 
              ( <MusicLi key={item.id} item={item}/> )
            ) 
          )
        }    
        {itemsData.error ? (<h2>{itemsData.error.message}</h2>) : (
          itemsData.loading) ? (<div>Loading...</div>) : (
            <Controls />
          )
        }   
      </ul>
      <button className="load-btn"
              onClick={loadMoreSongs}>
        {"<<< Load More Tracks >>>"}
      </button>
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    itemsData: state.items
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchItems: () => dispatch(fetchItems())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(MusicList);