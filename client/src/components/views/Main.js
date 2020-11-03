import React from "react";
import "../css/Main.css";
import { TechSkills } from "../TechSkills";
import { Education } from "./Education";
import { TechnicalProjects } from "./TechnicalProjects";

export const Main = () => {
    return (
        <div>
            <TechSkills />
            <Education />
            <TechnicalProjects />
        </div>
    );
};
