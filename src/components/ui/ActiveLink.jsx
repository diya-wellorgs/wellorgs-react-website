import { Link, useLocation } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`py-2 px-3.5 text-sm font-medium relative transition-colors duration-300 ${
        isActive ? 'text-white' : 'text-gray-400 hover:text-white'
      }`}
    >
      {children}
      <span
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-white transform transition-transform duration-300 ${
          isActive ? 'scale-x-100' : 'scale-x-0'
        }`}
        style={{ transformOrigin: 'center' }}
      />
    </Link>
  );
};

export default ActiveLink;
