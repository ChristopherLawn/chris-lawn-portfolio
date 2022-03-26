import { Container } from "react-bootstrap"
import NavMenu from "../Nav/nav"


function Header(props) {

    return (
       <Container fluid className="header d-flex flex-row justify-content-between pt-3">
           <h2 className="main-title col-sm-6">Chris Lawn: Developer & AV Specialist</h2>
           <NavMenu className="col-sm-6" setPage={props.setPage} page={props.page}/>
       </Container>
    )
}

export default Header