
import { Link } from 'react-router-dom';
import { useState } from "react";
import useWindowWidth from './useWindowWidth';

import Menu from "./Menu";
import Search from "./Search";
import CartImage from '../images/cart.png';


function MenuIcon({ handleClick }) {
  return (
    <div className="menu-icon"
         onClick={() => handleClick()}>
      <div className='menu-icon-bar'></div>
      <div className='menu-icon-bar'></div>
      <div className='menu-icon-bar'></div>
    </div>
  );
}

function Title() {
    return(
      <Link className='title' to='/'>
        <p>Beat Store</p>
      </Link>
    );
  }
  function Loggining() {
    return (
      <Link className='login' to='/logining'>
        <p>LOG IN</p>
      </Link>
    );
  }
  function Shopping({ text }) {
    return (
      <Link className='shopping' to='/chekout'>
        <p className='header-shopping-button'>
          <img className='header-icon' 
               src={CartImage} 
               alt='buy'>
          </img>
          {text}
        </p>
      </Link>
    );
  }

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
          <Loggining />
          <Search />
          <MenuIcon handleClick={handleClick}/>
        </div>
      </div>
      <div className='mobile-version'>
        {click && <Loggining />}
        {click && <Menu />}
        {click && <Shopping text={"CART"}/>}
      </div>
    </header> 
  )
}

export default NavBar;