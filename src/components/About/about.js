import React from "react";

function About() {
    return (
        <section className="about">
            <div className="row d-flex justify-content-center m-3">
                {/* <h1 className="justify-content-center">My Story</h1> */}
                <div className="col-sm-6">
                    <figure className="figure">
                        <img src={require('../../assets/images/headshot/ChrisLawn_Headshot.jpg')} className="figure-img img-fluid rounded" alt="A headshot of Chris Lawn" />
                    </figure>
                </div>
                <div className="bio col-sm-6">
                    <p>
                        Chris Lawn (pronouns: he / they) is a web developer based in the Pacific Northwest. He moved to Oregon in 2017 after immediately falling in love with the area while on a road trip traveling down the length of Route 101 from Seattle to San Diego.  With over a decade of professional experience in audio visual production and project management, Chris is excited to begin a new career as a Full-Stack Web Developer.
                    </p>
                    <p>
                        Originally born and raised in Massachusetts, he attended UMass Amherst and received a Bachelors Degree in Communication with a minor in Sociology.  His lifelong passion for media, technology, and software led him to a career doing audio visual production in community media and later moving on to AV project and program management in a corporate environment.
                    </p>
                    <p>
                        Looking to expand his technological skillset even further, Chris attended a Full Stack Web Development certificate program through the University of Oregon.  He has worked with React, MongoDB, Express, Node, JavaScript ES6, CSS3, HTML5, SQL, MySQL2, GitHub, Sequelize, Handlebars, jQuery, and Bootstrap.  His programming skills include Object-Oriented programming, Object-Relational Mapping, Model-View-Controller programming, and Progressive Web Applications.
                    </p>
                    <p>
                        A social extrovert with a passion for people, Chris enjoys working both independently and as part of a collaborative team.  His passions include coding, media, travel, meeting and networking with new people, music, dancing, food, art, and exploring the world around him with curiosity, fervor, and a sense of humor. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;