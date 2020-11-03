import React from "react";
import "../css/TechnicalProjects.css";

export const TechnicalProjects = () => {
    return (
        <div className="technical_projects_container Yborder">
            <div className="row">
                <div className="title pl-5 tYellow">
                    <h1>Technical Projects</h1>
                </div>
            </div>
            <div className="row tech-box">
                <div className="sub-title col-lr-3 ml-3">
                    <h3>Journey Journal</h3>
                </div>
                <div className="tech-box-content col-lg-9 ">
                    <p>
                        Sometimes it is so hard to keep track of where you have
                        come from while you are in the middle of it. Journey
                        Journal will keep track of where you have been so that
                        you can see where you are going. Helping you keep the
                        big picture in mind.
                    </p>
                </div>
            </div>
            <div className="row tech-box">
                <div className="sub-title col-lr-3 ml-3">
                    <h3>COACH</h3>
                </div>
                <div className="tech-box-content col-lg-9 ">
                    <p>
                        Need suport to keep motivated to stay healthy? With
                        COACH you can use your friends and family to meet this
                        need. With the idea of a race in mind, you can compete
                        with those around you in order to keep track of your
                        eating, sleeping, exersice, and water intake.
                    </p>
                </div>
            </div>
            <div className="row tech-box">
                <div className="sub-title col-lr-3 ml-3">
                    <h3>TAZKR</h3>
                </div>
                <div className="tech-box-content col-lg-9 ">
                    <p>
                        A Trello style project manager that is designed to help
                        keep track of what tasks in a project are active and
                        what tasks are completed. As well as where the tasks are
                        along the way.
                    </p>
                </div>
            </div>
        </div>
    );
};
