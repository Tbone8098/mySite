import React from "react";
import { Link } from "@reach/router";

export const NavBar = (props) => {
    return (
        <div className="NavBar">
            <ul>
                <Link to="/">
                    {props.activePage === "Main" ? (
                        <span className="Nav-Active">
                            <li>Q</li>
                        </span>
                    ) : (
                        <li>Q</li>
                    )}
                </Link>
                <Link to="/mystory">
                    {props.activePage === "MS" ? (
                        <span className="Nav-Active">
                            <li>MS</li>
                        </span>
                    ) : (
                        <li>MS</li>
                    )}
                </Link>
                <Link to="/mywork">
                    {props.activePage === "MW" ? (
                        <span className="Nav-Active">
                            <li>MW</li>
                        </span>
                    ) : (
                        <li>MW</li>
                    )}
                </Link>
                <Link to="/contactme">
                    {props.activePage === "CM" ? (
                        <span className="Nav-Active">
                            <li>CM</li>
                        </span>
                    ) : (
                        <li>CM</li>
                    )}
                </Link>
            </ul>
        </div>
    );
};
