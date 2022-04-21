import { Row, Container, Col, Card, Button, Stack } from 'react-bootstrap'

export default function Portfolio() {
    const projectArrayOne = [
        {
            title: "Team Project: Mall Direct",
            link: 'https://mall-direct.herokuapp.com/',
            image: 'https://github.com/knharman/mall-directory/blob/feature/README/client/assets/mall-direct-developer-dashboard.jpg?raw=true',
            description: 'A great place to view or advertise your local shopping centers, Mall Direct is a dual-purpose website that serves as an accessible online mall guide for consumers and an easy-to-use content management system for mall developers.',
            githubLink: 'https://github.com/knharman/mall-directory'
        },
        {
            title: "Team Project: LEARN IT",
            link: 'https://damp-journey-96412.herokuapp.com/',
            image: 'https://github.com/ChristopherLawn/learn-code-work/blob/main/assets/images/learn-it-homepage.jpg?raw=true',
            description: 'An interactive educational forum for exploring web development languages. Choose a language to view more about the history and background. Create an account to join the conversation and share personal anecdotes and online resources, view comment analytics, and engage with the larger LEARN IT community!',
            githubLink: 'https://github.com/ChristopherLawn/learn-code-work'
        },
        {
            title: "Team Project: Chew View",
            link: 'https://christopherlawn.github.io/team-1-dinner-movie/',
            image: 'https://user-images.githubusercontent.com/91863054/160073211-b34cab41-b939-445f-86d0-f94a63a71465.png?raw=true',
            description: 'A free-to-use site that simplifies date nights and speeds up decision-making! Use Chew View to search restaurants by zip code and cuisine type & search for movies based on keywords and titles.',
            githubLink: 'https://github.com/ChristopherLawn/team-1-dinner-movie'
        }
    ];

    const projectArrayTwo = [
        {
            title: "TechCollude",
            link: 'https://shrouded-bayou-81487.herokuapp.com/',
            image: 'https://github.com/ChristopherLawn/tech-collude/blob/main/assets/tech-collude-homepage.jpg?raw=true',
            description: 'An engaging tech blog site where users can create posts, leave comments on posts, and edit and delete posts using a simple and straightforward interface.',
            githubLink: 'https://github.com/ChristopherLawn/tech-collude'
        },
        {
            title: "International Weather Dashboard",
            link: 'https://christopherlawn.github.io/weather-dashboard/',
            image: 'https://user-images.githubusercontent.com/91863054/146675671-d16f3c24-dc24-4c27-8524-116b320b79d3.PNG?raw=true',
            description: 'A simple weather app where users can search for any city to see information about the current day and view the upcoming 5-day forecast. Reports include conditions, temperature, humidity levels, wind speed, and UVI index.',
            githubLink: 'https://github.com/ChristopherLawn/weather-dashboard'
        },
        {
            title: "JavaScript Code Quiz",
            link: 'https://christopherlawn.github.io/code-quiz-web-api/',
            image: 'https://user-images.githubusercontent.com/91863054/144741123-2596a9b6-0a99-43c2-b21a-7f78dfd36307.PNG',
            description: "A fun and interactive multiple-choice quiz that challenges the player's knowledge about JavaScript.  Beat the clock to achieve the glory of adding your high-score!",
            githubLink: 'https://github.com/ChristopherLawn/code-quiz-web-api'
        }
    ];
    return (
        <Container className='justify-content-between pt-4'>
            <Row className='d-flex pt-2 pb-2'>
                {projectArrayOne.map((project) => (
                    <Col>
                        <Card className='project mt-2 mb-2'>
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title className='card-title'>{project.title}</Card.Title>
                                <Card.Text className='card-text'>
                                    {project.description}
                                </Card.Text>
                                <Stack direction='horizontal' gap={5}>
                                    <Button variant="outline-primary" href={project.link} target="_blank">Project Website</Button>
                                    <div className='vr' />
                                    <Button variant="outline-info" href={project.githubLink} target="_blank">GitHub Repo</Button>
                                </Stack>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row className='d-flex pt-2 pb-2'>
                {projectArrayTwo.map((project) => (
                    <Col>
                        <Card className='project mt-2 mb-2'>
                            <Card.Img variant="top" src={project.image} />
                            <Card.Body>
                                <Card.Title className='card-title'>{project.title}</Card.Title>
                                <Card.Text className='card-text'>
                                    {project.description}
                                </Card.Text>
                                <Stack direction='horizontal' gap={5}>
                                    <Button variant="outline-primary" href={project.link} target="_blank">Project Website</Button>
                                    <div className='vr' />
                                    <Button variant="outline-info" href={project.githubLink} target="_blank">GitHub Repo</Button>
                                </Stack>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}