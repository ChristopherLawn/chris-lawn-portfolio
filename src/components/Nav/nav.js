import { Nav } from 'react-bootstrap';
import React, {useState} from 'react'

function NavMenu(props) {
    const [active, setActive] = useState('/about');
    return (
        <Nav  className='nav-titles flex-xs-column'
            activeKey={active}
        >
            <Nav.Item>
                <Nav.Link eventKey="about"
                href="/about" 
                className='section-title' onClick={() => {
                    props.setPage('about')
                    setActive('/about')
                    }}>About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="portfolio" 
                href='/portfolio'
                className='section-title' onClick={() => {
                    setActive('/portfolio')
                    props.setPage('portfolio')
                    }}>Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="contact" 
                href='/contact'
                className='section-title' onClick={() => props.setPage('contact')}>Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                {/* <Nav.Link>  */}
                    <a className='section-title nav-link' href="https://drive.google.com/file/d/1126tF-rh4M9EHsAS3pFoq6eDHB_7VVyB/view?usp=sharing" target="_blank" rel="noreferrer" download>Resume</a>
                    {/* </Nav.Link> */}
            </Nav.Item>
        </Nav>
    )
}

export default NavMenu;