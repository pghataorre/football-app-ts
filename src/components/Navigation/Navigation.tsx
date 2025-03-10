import CloseIcon from "../Icons/CloseIcon";
import './Navigation.scss';

type TNavigation = {
    navActve: boolean;
    handleNavState: (event: React.MouseEvent<Element, MouseEvent> | undefined, pageName: string) => void;
}

const Navigation = ({handleNavState, navActve}: TNavigation) => {
    return (
        <div className={`${ navActve ? 'nav-links-active' : 'nav-links'}`}>
            <button className="close-nav" onClick={(event) => handleNavState(event, '')}>
                <CloseIcon />
            </button>
            <ul className="nav">
                <li onClick={ (event) => handleNavState(event, 'default-page')} >
                    <a href="default-page">Home</a>       
                </li>
                <li onClick={ (event) => handleNavState(event, 'live-session-page') }>
                    <a href="live-session">Live Sessions</a>       
                </li>
                <li onClick={ (event) => handleNavState(event, 'mixes-page') }>
                    <a href="mixes-page">Mixes</a>       
                </li>
                <li onClick={ (event) => handleNavState(event, 'contact-page') }>
                    <a href="#contact-page">Get in touch</a>       
                </li>
            </ul>
        </div>
    )
}

export default Navigation;