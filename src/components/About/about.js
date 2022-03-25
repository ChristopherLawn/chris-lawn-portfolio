import React from "react";

function About() {
    return (
        <section className="d-flex flex-row justify-content-between p-5">
            <img
                src={require(`../../assets/images/headshot/ChrisLawn_Headshot.jpg`)}
                alt='Chris Lawn Headshot'
                className="img-thumbnail headshot-pic"
            />
            <div className="bio">
                <p>
                    Born and raised in Massachusetts, I moved to the Pacific Northwest in 2017. I have over a decade of experience in audio visual production and project management. I recently decided to expand my skills by learning full-stack web development. I'm excited for the journey I'm about to take, and I hope you share it with me!
                </p>
                <p>Went to UMass Amherst</p>
                <p>Loves hiking</p>
                <p>Coding languages: html/css/js</p>
            </div>

        </section>
    )
}

export default About;