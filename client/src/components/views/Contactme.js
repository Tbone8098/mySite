import React, { useEffect } from "react";
import "../css/contactme.css";
import meandkendal from "../img/meandkendal.png";
import resume from "../img/resume.png";
import linkedin from "../img/linkedin.png";
import github from "../img/github.png";
import coolguyEmoji from "../img/coolguyEmoji.png";

export const Contactme = (props) => {
    useEffect(() => {
        props.newPage("CM");
    }, []);
    return (
        <div className="content">
            <div className="box">
                <span className="title">
                    <h1>Contact Me</h1>
                </span>
                <hr className="mt-1 mb-1" />
                <p className="t-r">
                    ...Please{" "}
                    <img className="coolguyEmoji" src={coolguyEmoji} alt="" />
                </p>
            </div>
            <div className="box">
                <h2>Email:</h2>
                <p>thibault.tyler@gmail.com</p>
                <hr className="mt-1 mb-1" />
                <h2>Cell #:</h2>
                <p>253-205-7917</p>
            </div>
            <div className="box">
                <h2>Links</h2>
                <hr className="mt-1 mb-2" />
                <div className="link-icons">
                    <div className="link-item">
                        <a
                            href="https://docs.google.com/document/d/1ZRIBsqjAE5r1NFZkgL2sc_7lBOcqxr7mUmlHU4M3H3Y/edit?usp=sharing"
                            target="_blank"
                        >
                            <img src={resume} alt="my resume" />
                        </a>
                        <p>Resume</p>
                    </div>
                    <div className="link-item">
                        <a
                            href="https://www.linkedin.com/in/tyler-thibault-a4404178/"
                            target="_blank"
                        >
                            <img src={linkedin} alt="LinkedIn" />
                        </a>
                        <p>LinkedIn</p>
                    </div>
                    <div className="link-item">
                        <a href="https://github.com/Tbone8098" target="_blank">
                            <img src={github} alt="Github" />
                        </a>
                        <p>Github</p>
                    </div>
                </div>
            </div>
            <div className="box">
                <img
                    className="border pill bDark meandkendal imgSquare"
                    src={meandkendal}
                    alt=""
                />
            </div>
        </div>
    );
};
