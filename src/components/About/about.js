import React from "react";

function About() {
    return (
        <section className="about">
            <div className="row d-flex justify-content-center m-3">
                {/* <h1 className="justify-content-center">My Story</h1> */}
                <div className="col-sm-4">
                    <figure className="figure">
                        <img src={require(`../../assets/images/headshot/ChrisLawn_Headshot.jpg`)} className="figure-img img-fluid rounded" alt="A headshot of Chris Lawn" />
                    </figure>
                </div>
                <div className="bio col-sm-4">
                    <p>
                        Born and raised in Massachusetts, I moved to the Pacific Northwest in 2017. I have over a decade of experience in audio visual production and project management. I recently decided to expand my skills by learning full-stack web development. I'm excited for the journey I'm about to take, and I hope you share it with me!
                    </p>
                    <p>Went to UMass Amherst</p>
                    <p>Loves hiking</p>
                    <p>Coding languages: html/css/js</p>
                </div>
            </div>
        </section>
    )
}

export default About;