import React, { useEffect } from "react";
import "../css/Main.css";
import thefam from "../img/thefam.png";

export const Main = (props) => {
    useEffect(() => {
        props.newPage("Main");
    }, []);
    return (
        <div className="content">
            <div className="box">
                <span className="title">
                    <h1>Tyler Thibault</h1>
                </span>
                <hr className="mt-1 mb-1" />
                <p className="t-r">Qualifications</p>
            </div>
            <div className="box ">
                <img className="border pill imgSquare" src={thefam} alt="" />
            </div>
            <div className="box">
                <h2>Upcoming Training</h2>
                <p>
                    I will be attending another coding bootcamp at the end of
                    November at the University of Washington. This will last 3
                    months and will be focusing on MERN.
                </p>
            </div>
            <div className="box">
                <h2>My Training</h2>
                <p>
                    I am a Software Developer who has studied in three different
                    stacks with a Coding Bootcamp in Bellevue WA called Coding
                    Dojo. My Program covered
                </p>
                <br />
                <ol className="ml-3">
                    <li>
                        Python, utilizing Django as a framework with SQLight
                    </li>
                    <li>MERN</li>
                    <li>C#, utilizing ASP.NET and a SQL db </li>
                </ol>
            </div>
            <div className="box">
                <h2>Technical Skills</h2>
                <p>
                    JavaScript (ES6, Node.js), Python, HTML 5, CSS, Express,
                    Flask, BootStrap, JQuery, MySQL, MongoDB, Postman, VS Code,
                    Amazon, Web Services (AWS), RESTful API, MVC, Github, C#,
                    Entity, ASP.NET
                </p>
            </div>
        </div>
    );
};
