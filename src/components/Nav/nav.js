import { Nav } from 'react-bootstrap';

function NavMenu(props) {
    return (
        <Nav className='nav-titles flex-xs-column'>
            <Nav.Item>
                <Nav.Link eventKey="about" className={props.page === 'about' ? 'active section-title' : 'section-title'} onClick={(e) => {e.preventDefault();props.setPage('about')}}>About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="portfolio" className='section-title' onClick={(e) => {e.preventDefault();props.setPage('portfolio')}}>Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="contact" className='section-title' onClick={(e) => {e.preventDefault();props.setPage('contact')}}>Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                    <a className='section-title nav-link' href="https://docs.google.com/document/d/1wCyQvnnoJ1HBY6w57dMnUxx6sPIWlhIgSBITnk5_KU8/edit?usp=sharing" target="_blank" rel="noreferrer" download>Resume</a>
            </Nav.Item>
        </Nav>
    )
}

export default NavMenu;