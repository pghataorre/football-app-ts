import './Header.scss';
import linkToSection from './HeaderHelpers';
import NavIcon from '../Icons/NavIcon';
import Navigation from '../Navigation/Navigation';

const Header = () => {
  return (
    <div className="header-nav">
      <nav>
        <ul className="nav-icon">
          <li>
            <div>
              <NavIcon />
            </div>
            <Navigation linkToSection={linkToSection} />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
