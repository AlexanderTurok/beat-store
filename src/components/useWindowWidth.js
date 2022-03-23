
import { useState, useEffect, useCallback} from 'react'

function useWindowWidth() {
  const [width, setWidth] = useState(null);

  const handleWindowResize = useCallback(event => {
    setWidth(window.innerWidth);
  }, []); 
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);

  return [width];
}

export default useWindowWidth