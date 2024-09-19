import './Header.scss';
import linkToSection from './HeaderHelpers';
import NavIcon from '../Icons/NavIcon';

const Header = () => {
  return (
    <div className="header-nav">
      <nav>
        <ul className="nav-icon">
          <li>
            <div>
              <NavIcon />
            </div>
            <ul className="nav-links">
              <li onClick={ (event) => linkToSection(event, 'default-page')} >
                <a href="#default-page">Home</a>       
              </li>
              <li onClick={ (event) => linkToSection(event, 'mixes-page') }>
                <a href="#mixes-page">Mixes</a>       
              </li>
              <li onClick={ (event) => linkToSection(event, 'contact-page') }>
                <a href="#mixes-page">Get in touch</a>       
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
