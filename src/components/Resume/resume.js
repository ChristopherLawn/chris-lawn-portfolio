import React from "react";

function Resume() {
    return (
        <section className="resume">
            <div className="row d-flex justify-content-center m-3">
                <div className="bio">
                    <p>
                        Chris attended a Full Stack Web Development certificate program through the University of Oregon.  He has worked on individual and group projects using React, MongoDB, Express, Node, JavaScript ES6, CSS3, HTML5, SQL, MySQL2, GitHub, Sequelize, Handlebars, jQuery, and Bootstrap.  His programming skills include Object-Oriented Programming (OOP), Object-Relational Mapping (ORM), Model-View-Controller Programming (MVC), and Progressive Web Applications (PWA).  A social extrovert with a natural talent for customer service, Chris enjoys working both independently and as part of a collaborative team.  
                    </p>
                    <a className="resume-download" href="https://drive.google.com/file/d/12medG1-0qpjxkkEDeklFQOmHPa-89sBZ/view?usp=sharing" target="_blank" rel="noreferrer" download><h3 className="resume-download">View Resume</h3></a>
                    <p>When viewing, click the 'Download' link in the upper right corner to save it to your local device.</p>
                </div>
            </div>
        </section>
    )
}

export default Resume;