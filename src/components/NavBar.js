
import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from "react";

import Menu from "./Menu";
import Search from "./Search";
import CartImage from '../images/cart.png';


function MenuIcon() {
  return (
    <div className= "menu-icon">
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
      <Link className='header-button' to='/logining'>
        <p>LOG IN</p>
      </Link>
    );
  }
  function Shopping({ price }) {
    return (
      <Link className='header-button' to='/chekout'>
        <img className='header-icon' src={CartImage} alt='buy'></img>
        <p className='header-shopping-button'>${price}</p>
      </Link>
    );
  }

function NavBar({ price }) {
  const [width, setWidth] = useState(null);
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleWindowResize = useCallback(event => {
    setWidth(window.innerWidth);
  }, []); 
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  return (
    <div className='header'>
      <div className='header-col'>
        <Title />
      </div>
      <div className='header-col'>
        <Menu closeMobileMenu={closeMobileMenu}/>
        <Shopping price={price}/>
        <Loggining />
        <Search />
        {width <= 1027 && <MenuIcon />}
      </div>
    </div>    
  )
}

export default NavBar;