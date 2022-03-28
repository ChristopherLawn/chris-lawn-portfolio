import { Container } from "react-bootstrap"
import About from "../About/about"
import ContactForm from "../Contact/contact"
import Portfolio from "../Portfolio/portfolio"
import Resume from "../Resume/resume"

export default function MainContent(props){
    function currentPage(){
        if(props.page === 'about'){
            return <About />
        }
        if(props.page === 'portfolio'){
            return <Portfolio />
        }
        if(props.page === 'contact'){
            return <ContactForm />
        }
        if(props.page === 'resume'){
            return <Resume />
        }
    }
    return(
        <Container className="mainContent">
            {currentPage()}
        </Container>
    )
}