import React from "react";

function About() {
    return (
        <section className="about">
            <div className="row d-flex justify-content-center m-3">
                <div className="col-sm-6">
                    <figure className="figure">
                        <img src={require('../../assets/images/headshot/ChrisLawn_Headshot.jpg')} className="figure-img img-fluid rounded" alt="A headshot of Chris Lawn" />
                    </figure>
                </div>
                <div className="bio col-sm-6">
                    <p>
                        Chris Lawn (pronouns: he / they) is a web developer based in the Pacific Northwest. Born and raised in Massachusetts, he relocated to Oregon in 2017 after immediately falling in love with the area while on a road trip driving from Seattle to San Diego. With over a decade of professional experience in audio visual production and project management, he is excited to utilize his lifelong passion for media, technology, and software to begin a new career as a Full Stack Web Developer.
                    </p>
                    <p>
                        Chris successfully completed a Full Stack Web Development certificate program through the University of Oregon. Previous to that, he graduated from the University of Massachusetts at Amherst and received a Bachelors Degree with a major in Communication and a minor in Sociology. His current skills include React, MongoDB, Express, Node, RESTful APIs, JavaScript ES6, CSS3, HTML5, SQL, MySQL2, GitHub, Sequelize, Handlebars, jQuery, and Bootstrap.
                    </p>
                    <p>
                        A social extrovert with a natural talent for customer service, Chris enjoys working both independently and as part of a collaborative team. His personal interests include coding, media, travel, camping, meeting and networking with new people, music, dancing, food, art, amusement parks, and generally exploring the world around him with curiosity, fervor, and a sense of humor. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;