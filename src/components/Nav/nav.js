import { Nav } from 'react-bootstrap';

function NavMenu(props) {
    return (
        <Nav className='nav-titles flex-xs-column'
            // activeKey="/about"
            // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
            <Nav.Item>
                <Nav.Link className='section-title' onClick={() => props.setPage('about')}>About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='section-title' onClick={() => props.setPage('portfolio')}>Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link className='section-title' onClick={() => props.setPage('contact')}>Contact</Nav.Link>
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