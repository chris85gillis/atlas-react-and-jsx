import Greeting from './Greeting';
import SocialLinks from './SocialLinks';
import './Header.css'; // Optional: Add any specific styles for the Header

function Header() {
  return (
    <nav className="header-nav">
      <Greeting />
      <SocialLinks />
    </nav>
  );
}

export default Header;