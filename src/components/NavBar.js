
import { Link } from 'react-router-dom';
import Menu from "./Menu";
import Search from "./Search";
import CartImage from '../images/cart.png';

function Title() {
    return(
      <Link className='title' to='/'>
        <p>Title</p>
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
  return (
    <div className='header'>
      <div className='header-col'>
        <Title />
      </div>
      <div className='header-col'>
        <Menu />
        <Shopping price={price}/>
        <Loggining />
        <Search />
      </div>
    </div>    
  )
}

export default NavBar