import React from "react";
import { useSpring, animated } from "react-spring";
import "./css/TechSkills.css";
import thefam from "./img/thefam.png";
import css from "./img/css.png";
import html from "./img/html.png";
import express from "./img/express.png";
import django from "./img/django.png";
import flask from "./img/flask.png";
import git from "./img/git.png";
import mongo from "./img/mongo.png";
import mysql from "./img/mysql.png";
import net_icon from "./img/net_icon.png";
import nodejs from "./img/nodejs.png";
import python from "./img/python.png";
import reaact from "./img/reaact.png";
import jquery from "./img/jquery.png";
import js from "./img/js.png";

export const TechSkills = () => {
    const props = useSpring({
        from: { marginLeft: "-500px" },
        to: { marginLeft: "-15px" },
        config: { duration: 500 },
    });
    return (
        <animated.div style={props} className="bBlue row tech_skills_container">
            <div className="col">
                <div className="tech_skill_title row px-5 d-flex justify-content-between align-items-center">
                    <h1>Tyler Thibault</h1>
                    <h2 className="tYellow">Technical Skills</h2>
                </div>
                <div className="row align-items-center">
                    <div className="col-lg-4 ml-3 d-flex flex-column align-items-center">
                        <img className="thefamImg" src={thefam} alt="" />
                        <h3>Web Developer</h3>
                    </div>
                    <div className="col ">
                        <ul className="no-style">
                            <li>Django</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>HTML 5</li>
                            <li>CSS</li>
                            <li>Express</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="no-style">
                            <li>Flask</li>
                            <li>Bootstap</li>
                            <li>JQuery</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="no-style">
                            <li>Postman</li>
                            <li>VS Code</li>
                            <li>
                                Amazon Web <br /> Services (AWS)
                            </li>
                            <li>RESTful API</li>
                            <li>MVC</li>
                        </ul>
                    </div>
                    <div className="col">
                        <ul className="no-style">
                            <li>GitHub</li>
                            <li>C#</li>
                            <li>Entity</li>
                            <li>ASP.NET</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="tech_icons col d-flex justify-content-end">
                        <img className="tech_icon" src={css} alt="" />
                        <img className="tech_icon" src={html} alt="" />
                        <img className="tech_icon" src={django} alt="" />
                        <img className="tech_icon" src={express} alt="" />
                        <img className="tech_icon" src={flask} alt="" />
                        <img className="tech_icon" src={git} alt="" />
                        <img className="tech_icon" src={jquery} alt="" />
                        <img className="tech_icon" src={js} alt="" />
                        <img className="tech_icon" src={mongo} alt="" />
                        <img className="tech_icon" src={mysql} alt="" />
                        <img className="tech_icon" src={net_icon} alt="" />
                        <img className="tech_icon" src={nodejs} alt="" />
                        <img className="tech_icon" src={python} alt="" />
                        <img className="tech_icon" src={reaact} alt="" />
                    </div>
                </div>
            </div>
        </animated.div>
    );
};
