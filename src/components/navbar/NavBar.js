
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
  // Pop up menu-icon staff
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  // If window width > 1075 - close menu
  if (width > 1075 && click == true) closeMobileMenu();

  return (
    <header className='header'>
      <div className='pc-version'>
        <Title />
        <Menu />
        <Shopping text={"$0.00"} />
        <Login />
        <Search />
        <MenuIcon 
          className='menu-icon'
          onClick={() => handleClick()} 
        />
      </div>
      <div className='mobile-version'>
        {click && <Login />}
        {click && <Menu />}
        {click && <Shopping text={"CART"} />}
      </div>
    </header> 
  )
}

export default NavBar;