import { Container } from "react-bootstrap"
import NavMenu from "../Nav/nav"


function Header(props) {

    return (
       <Container fluid className="d-flex flex-row justify-content-between pt-3">
           <h1 className="main-title">Chris Lawn: Developer</h1>
           <NavMenu setPage={props.setPage}/>
       </Container>
    )
}

export default Header