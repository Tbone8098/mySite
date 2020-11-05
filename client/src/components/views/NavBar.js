import React from "react";

export const NavBar = () => {
    return (
        <div className="NavBar d-flex justify-content-end pr-5 pt-2">
            <ul className="d-flex no-style">
                <li className="pl-2 tYellow">
                    <a
                        href="https://docs.google.com/document/d/1ZRIBsqjAE5r1NFZkgL2sc_7lBOcqxr7mUmlHU4M3H3Y/edit?usp=sharing"
                        target="_blank"
                        className="tYellow"
                    >
                        My Resume
                    </a>
                </li>
                <li className="pl-2 tYellow">|</li>
                <li className="pl-2 tYellow">My Blog</li>
            </ul>
        </div>
    );
};
