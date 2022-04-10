
import { useState } from "react";
import { FiMenu as MenuIcon } from "react-icons/fi";

import Menu from "./Menu";
import Title from './Title';
import Login from './Login';
import Search from "../search/Search";
import Shopping from "./Shopping";
import useWindowWidth from '../hooks/useWindowWidth';

function NavBar() {
  // Get width of window
  const [width] = useWindowWidth();
  // Clicking on menu icon staff
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  // When we resize wondow > 1075 menu disappers
  if (width > 1075 && click == true) closeMobileMenu();

  return (
    <header className='header'>
      <div className='pc-version'>
        <div className='header-col'>
          <Title />
        </div>
        <div className='header-col'>
          <Menu />
          <Shopping text={"$0.00"}/>
          <Login />
          <Search />
          <MenuIcon 
            className='menu-icon'
            onClick={() => handleClick()} 
          />
        </div>
      </div>
      <div className='mobile-version'>
        {click && <Login />}
        {click && <Menu />}
        {click && <Shopping text={"CART"}/>}
      </div>
    </header> 
  )
}

export default NavBar;