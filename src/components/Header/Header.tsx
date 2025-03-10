import './Header.scss';
import linkToSection from './HeaderHelpers';
import NavIcon from '../Icons/NavIcon';
import Navigation from '../Navigation/Navigation';
import { useState } from 'react';

const Header = () => {
  const [navActve, setNavActive] = useState<boolean>(false);

  const handleNavState = (event?: React.MouseEvent<Element, MouseEvent>, pageName?: string | undefined) => {

    setNavActive(!navActve);
    if (pageName) {
      linkToSection(event, pageName);
    }

  } 

  return (
    <div className="header-nav">
      <nav>
        <ul className="nav-icon">
          <li>
            <div onMouseOver={(event) => handleNavState(event)}>
              <NavIcon />
            </div>
            <Navigation navActve={navActve} handleNavState={handleNavState}/>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
