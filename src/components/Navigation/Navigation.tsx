
type TNavigation = {
    linkToSection: (event: React.MouseEvent<Element, MouseEvent> | undefined, linkId: string) => void;
}

const Navigation = ({linkToSection}: TNavigation) => {

    return (
        <ul className="nav-links">
            <li onClick={ (event) => linkToSection(event, 'default-page')} >
                <a href="default-page">Home</a>       
            </li>
            <li onClick={ (event) => linkToSection(event, 'live-session-page') }>
                <a href="live-session">Live Sessions</a>       
            </li>
            <li onClick={ (event) => linkToSection(event, 'mixes-page') }>
                <a href="mixes-page">Mixes</a>       
            </li>
            <li onClick={ (event) => linkToSection(event, 'contact-page') }>
                <a href="#contact-page">Get in touch</a>       
            </li>
        </ul>
    )
}

export default Navigation;