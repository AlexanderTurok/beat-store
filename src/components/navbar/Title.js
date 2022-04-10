
import { Link } from 'react-router-dom';

function Title() {
  return(
    <Link className='title' to='/'>
      <p>Beat Store</p>
    </Link>
  );
}

export default Title;