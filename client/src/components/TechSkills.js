import React from "react";
import thefam from "./img/thefam.png";

export const TechSkills = () => {
    return (
        <div className="bBlue Yborder">
            <div className="row px-5 d-flex justify-content-between align-items-center">
                <h1>Tyler Thibault</h1>
                <h2 className="tYellow">Technical Skills</h2>
            </div>
            <hr />
            <div className="row align-items-center">
                <div className="col-8 ml-3 d-flex flex-column align-items-start">
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
                        <li>Amazon Web Services (AWS)</li>
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
        </div>
    );
};
