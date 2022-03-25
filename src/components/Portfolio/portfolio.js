import { Row, Container, Col, Card, Button, Stack } from 'react-bootstrap'

export default function Portfolio() {
    const projectArray = [
        {
            title: "LEARN IT",
            link: 'https://damp-journey-96412.herokuapp.com/',
            image: 'https://github.com/ChristopherLawn/learn-code-work/blob/main/assets/images/learn-it-homepage.jpg?raw=true',
            description: 'An interactive educational forum for exploring web development languages!',
            githubLink: 'https://github.com/ChristopherLawn/learn-code-work'
        },
        {
            title: "LEARN IT",
            link: 'https://damp-journey-96412.herokuapp.com/',
            image: 'https://github.com/ChristopherLawn/learn-code-work/blob/main/assets/images/learn-it-homepage.jpg?raw=true',
            description: 'An interactive educational forum for exploring web development languages!',
            githubLink: 'https://github.com/ChristopherLawn/learn-code-work'
        },
        {
            title: "LEARN IT",
            link: 'https://damp-journey-96412.herokuapp.com/',
            image: 'https://github.com/ChristopherLawn/learn-code-work/blob/main/assets/images/learn-it-homepage.jpg?raw=true',
            description: 'An interactive educational forum for exploring web development languages!',
            githubLink: 'https://github.com/ChristopherLawn/learn-code-work'
        },
        {
            title: "LEARN IT",
            link: 'https://damp-journey-96412.herokuapp.com/',
            image: 'https://github.com/ChristopherLawn/learn-code-work/blob/main/assets/images/learn-it-homepage.jpg?raw=true',
            description: 'An interactive educational forum for exploring web development languages!',
            githubLink: 'https://github.com/ChristopherLawn/learn-code-work'
        },
        {
            title: "LEARN IT",
            link: 'https://damp-journey-96412.herokuapp.com/',
            image: 'https://github.com/ChristopherLawn/learn-code-work/blob/main/assets/images/learn-it-homepage.jpg?raw=true',
            description: 'An interactive educational forum for exploring web development languages!',
            githubLink: 'https://github.com/ChristopherLawn/learn-code-work'
        },
        {
            title: "LEARN IT",
            link: 'https://damp-journey-96412.herokuapp.com/',
            image: 'https://github.com/ChristopherLawn/learn-code-work/blob/main/assets/images/learn-it-homepage.jpg?raw=true',
            description: 'An interactive educational forum for exploring web development languages!',
            githubLink: 'https://github.com/ChristopherLawn/learn-code-work'
        }
    ];
    return (
        <Container>
            <Row>
                <Col>
                    <h1>My projects</h1>
                    <div>
                        <p> my projects  blah blah blah</p>
                        <p> my projects  blah blah blah</p>
                        <p> my projects  blah blah blah</p>
                        <p> my projects  blah blah blah</p>
                        <p> my projects  blah blah blah</p>
                    </div>
                </Col>
            </Row>
            <Row>
                {projectArray.map((project) => (
                    <Col>
                        <Card className='project'>
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title className='card-title'>{project.title}</Card.Title>
                                <Card.Text>
                                    {project.description}
                                </Card.Text>
                                <Stack direction='horizontal' gap={2}>
                                    <Button variant="primary" href={project.link}>Project Website</Button>
                                    <div className='vr' />
                                    <Button variant="primary" href={project.githubLink}>GitHub Repo</Button>
                                </Stack>

                            </Card.Body>
                        </Card>
                    </Col>
                ))}


            </Row>

        </Container>
    )
}