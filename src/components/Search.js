
import { useState } from 'react';
import SearchIcon from '../images/search.png';
import SearchList from './SearchList';

function Search() {
  // state for activation search bar
  const [isClicked, setIsClicked] = useState(false);
  const showSearchBar = () => {
    setIsClicked(!isClicked);
  }
  
  // state for entered text
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };  
  
  return (
  <div className='header-search'>
    {!isClicked ? "" : // change classname if input empty
      <div>
        <input className='header-search-bar'
               type="text"
               placeholder='Search...'
               onChange={inputHandler} />
        <SearchList input={inputText}
                 // to close list when song is choosen
                    isClicked={isClicked} 
                    setIsClicked={setIsClicked} /> 
      </div>
    }
    <img className='header-icon' // search icon
         src={SearchIcon} 
         alt='search'
         onClick={showSearchBar}/>
  </div>
  );
}

export default Search;


