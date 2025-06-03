import { useLocation } from 'react-router-dom';
import { useAutoScrollToTop } from '../hooks/useScrollToTop';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  // Use the custom hook for automatic scroll to top
  useAutoScrollToTop(pathname);

  return null;
};

export default ScrollToTop;
