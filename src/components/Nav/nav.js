import { Nav } from 'react-bootstrap';

function NavMenu(props) {
    return (
        <Nav className='nav-titles flex-xs-column'>
            <Nav.Item>
                <Nav.Link eventKey="about" className={props.page === 'about' ? 'active section-title' : 'section-title'} onClick={(e) => { e.preventDefault(); props.setPage('about') }}>About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="portfolio" className='section-title' onClick={(e) => { e.preventDefault(); props.setPage('portfolio') }}>Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="contact" className='section-title' onClick={(e) => { e.preventDefault(); props.setPage('contact') }}>Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="resume" className='section-title' onClick={(e) => { e.preventDefault(); props.setPage('resume') }}>Resume</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export default NavMenu;