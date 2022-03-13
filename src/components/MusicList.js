
import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchItems } from "../redux/apiData/apiActions";

import MusicLi from "./MusicLi";

function Strongs() {
  return (
    <li className="music-li">
      <strong className='strong strong-title'>TITLE</strong>
      <strong className='strong strong-time'>KEY</strong>
      <strong className='strong strong-bpm'>BPM</strong>
      <strong className='strong strong-tags'>TAGS</strong>
      <strong className='strong strong-options'>OPTIONS</strong>
    </li>
  );
}

function MusicList({ itemsData, fetchItems }) {
  useEffect(() => {
    fetchItems()
  }, [])

  return ( 
    <div className='music-list'>
      <ul className='music-data'>
        <Strongs />
        {itemsData.error ? (<h2>{itemsData.error.message}</h2>) : (
          itemsData.loading) ? (<div>Loading...</div>) : (
            itemsData.items.map((item) => 
              ( <MusicLi key={item.id} item={item}/> )
            ) 
          )
        }    
      </ul>
      <button className="load-btn">
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