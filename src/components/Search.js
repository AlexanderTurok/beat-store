
import { useState } from 'react';
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
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
  <div className='header-search'
       onClick={showSearchBar}>
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
    <SearchIcon className='header-icon'/>
  </div>
  );
}

export default Search;


