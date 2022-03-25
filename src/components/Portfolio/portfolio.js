import { Row, Container, Col, Card, Button, Stack } from 'react-bootstrap'

export default function Portfolio() {
    const projectArrayOne = [
        {
            title: "Team Project: LEARN IT",
            link: 'https://damp-journey-96412.herokuapp.com/',
            image: 'https://github.com/ChristopherLawn/learn-code-work/blob/main/assets/images/learn-it-homepage.jpg?raw=true',
            description: 'An interactive educational forum for exploring web development languages!',
            githubLink: 'https://github.com/ChristopherLawn/learn-code-work'
        },
        {
            title: "Team Project: Chew View",
            link: 'https://christopherlawn.github.io/team-1-dinner-movie/',
            image: 'https://user-images.githubusercontent.com/91863054/160073211-b34cab41-b939-445f-86d0-f94a63a71465.png?raw=true',
            description: 'A free-to-use site that simplifies date nights and speeds up decision-making! Use Chew View to search restaurants by zip code and cuisine type & search for movies based on keywords and titles.',
            githubLink: 'https://github.com/ChristopherLawn/team-1-dinner-movie'
        },
        {
            title: "TechCollude",
            link: 'https://shrouded-bayou-81487.herokuapp.com/',
            image: 'https://github.com/ChristopherLawn/tech-collude/blob/main/assets/tech-collude-homepage.jpg?raw=true',
            description: 'An engaging tech blog site where users can create posts, leave comments on posts, and edit and delete posts using a simple and straightforward interface.',
            githubLink: 'https://github.com/ChristopherLawn/tech-collude'
        }
    ];

    const projectArrayTwo = [
        {
            title: "International Weather Dashboard",
            link: 'https://christopherlawn.github.io/weather-dashboard/',
            image: 'https://user-images.githubusercontent.com/91863054/146675671-d16f3c24-dc24-4c27-8524-116b320b79d3.PNG?raw=true',
            description: 'A simple weather app where users can search for any city to see information about the current day and view the upcoming 5-day forecast. Reports include conditions, temperature, humidity levels, wind speed, and UVI index.',
            githubLink: 'https://github.com/ChristopherLawn/weather-dashboard'
        },
        {
            title: "Work Day Scheduler",
            link: 'https://christopherlawn.github.io/work-day-scheduler/',
            image: 'https://user-images.githubusercontent.com/91863054/145012462-44f1da1d-edde-4e45-9c2e-a45040c79b64.PNG?raw=true',
            description: 'A daily task scheduler that conveniently shows the user the current day and time and color-codes each hour to let the user know which tasks are overdue and which tasks are coming up!',
            githubLink: 'https://github.com/ChristopherLawn/work-day-scheduler'
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
                                <Stack direction='horizontal' gap={4}>
                                    <Button variant="outline-primary" href={project.link}>Project Website</Button>
                                    <div className='vr' />
                                    <Button variant="outline-info" href={project.githubLink}>GitHub Repo</Button>
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
                                <Stack direction='horizontal' gap={2}>
                                    <Button variant="outline-primary" href={project.link}>Project Website</Button>
                                    <div className='vr' />
                                    <Button variant="outline-info" href={project.githubLink}>GitHub Repo</Button>
                                </Stack>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    )
}