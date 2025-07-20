import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '20px', padding: '10px' }}>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
