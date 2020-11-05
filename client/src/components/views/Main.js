import React from "react";
import "../css/Main.css";
import { TechSkills } from "../TechSkills";
import { AboutMe } from "./AboutMe";
import { Education } from "./Education";
import { Footer } from "./Footer";
import { TechnicalProjects } from "./TechnicalProjects";

export const Main = () => {
    return (
        <div className="container-fluid">
            <TechSkills />
            <Education />
            <TechnicalProjects />
            <AboutMe />
            <Footer />
        </div>
    );
};
