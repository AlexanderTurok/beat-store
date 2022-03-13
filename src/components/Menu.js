
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <ul className='menu'>
      <Link to='/about'>
        <li className='header-button'><p>ABOUT</p></li>
      </Link>
      <Link to='/beats'>
        <li className='header-button'><p>BEATS</p></li>
      </Link> 
      <Link to='/sound-kits'>
        <li className='header-button'><p>SOUND KITS</p></li>
      </Link> 
      <Link to='/contact'>
        <li className='header-button'><p>CONTACT</p></li>
      </Link>
    </ul>
  );
}

export default Menu;