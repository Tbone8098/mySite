import React from "react";

export const NavBar = () => {
    return (
        <div className="NavBar d-flex justify-content-end pr-5 pt-2">
            <ul className="d-flex no-style">
                <li className="pl-2 tYellow">My Resume</li>
                <li className="pl-2 tYellow">|</li>
                <li className="pl-2 tYellow">My Blog</li>
            </ul>
        </div>
    );
};
