
import { Link } from 'react-router-dom';
import { GiShoppingCart as Cart } from "react-icons/gi";

function Shopping({ text }) {
  return (
    <Link className='shopping' to='/chekout'>
      <p className='header-shopping-button'>
        <Cart className='header-icon'/>
        {text}
      </p>
    </Link>
  );
}

export default Shopping;