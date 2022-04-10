
import { useState } from 'react';
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
import SearchInput from './SearchInput';

function Search() {
  // state for activation search bar
  const [isClicked, setIsClicked] = useState(false);
  const showSearchBar = () => {
    setIsClicked(!isClicked);
  }
  
  return (
  <div className='header-search'>
    <SearchInput 
      isClicked={isClicked}
      setIsClicked={setIsClicked} />
    <SearchIcon 
      className='header-icon'
      onClick={showSearchBar} />
  </div>
  );
}

export default Search;


