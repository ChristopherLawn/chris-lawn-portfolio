import { Container } from "react-bootstrap"
import About from "../About/about"
import Contact from "../Contact/contact"
import Portfolio from "../Portfolio/portfolio"

export default function MainContent(props){
    function currentPage(){
        if(props.page === 'about'){
            return <About />
        }
        if(props.page === 'portfolio'){
            return <Portfolio />
        }
        if(props.page === 'contact'){
            return <Contact />
        }
    }
    return(
        <Container>
            {currentPage()}
        </Container>
    )
}