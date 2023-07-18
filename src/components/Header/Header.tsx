
import { Link } from 'react-router-dom';
import './Header.scss';
import linkToSection from './HeaderHelpers';


const Header = () => {
  return (
    <div className="header-nav">
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>       
          </li>
          {/* <li>
            <Link to="/teams">Teams</Link>       
          </li>
          <li>
            <Link to="/managers">Managers</Link>       
          </li>
          <li>
            <Link to="/fixtures">Fixtures</Link>       
          </li> */}
          <li onClick={ (event) => linkToSection(event, 'mixes-page') }>
            <a href="#mixes-page">Mixes</a>       
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
