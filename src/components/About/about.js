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
                        Chris Lawn (pronouns: he / they) is a web developer based in the Pacific Northwest. He moved to Oregon in 2017 after immediately falling in love with the area while on a road trip traveling down the length of Route 101 from Seattle to San Diego.  With over a decade of professional experience in audio visual production and project management, Chris is excited to begin a new career as a Full-Stack Web Developer.
                    </p>
                    <p>
                        Originally born and raised in Massachusetts, he attended UMass Amherst and received a Bachelors Degree in Communication with a minor in Sociology.  His lifelong passion for media, technology, and software led him to a career in audio visual production working for community media non-profits before moving up to AV project and program management in a corporate environment.
                    </p>
                    <p>
                        His passions include coding, media, travel, camping, meeting and networking with new people, music, dancing, food, art, amusement parks, and generally exploring the world around him with curiosity, fervor, and a sense of humor. 
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;