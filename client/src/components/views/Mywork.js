import React, { useEffect } from "react";

export const Mywork = (props) => {
    useEffect(() => {
        props.newPage("MW");
    }, []);
    return (
        <div className="content">
            <div className="box">
                <span className="title">
                    <h1>Technical Projects</h1>
                </span>
                <hr className="mt-1 mb-1" />
                <p className="t-r">My Work</p>
            </div>
            <div className="box">
                <h2>Journey Journal</h2>
                <hr />
                <p>
                    Sometimes it is so hard to keep track of where you have come
                    from while you are in the middle of it. Journey Journal will
                    keep track of where you have been so that you can see where
                    you are going. Helping you keep the big picture in mind.
                </p>
            </div>
            <div className="box">
                <h2>COACH</h2>
                <hr />
                <p>
                    Need suport to keep motivated to stay healthy? With COACH
                    you can use your friends and family to meet this need. With
                    the idea of a race in mind, you can compete with those
                    around you in order to keep track of your eating, sleeping,
                    exersice, and water intake.
                </p>
            </div>
            <div className="box">
                <h2>TAZKR</h2>
                <hr />
                <p>
                    A Trello style project manager that is designed to help keep
                    track of what tasks in a project are active and what tasks
                    are completed. As well as where the tasks are along the way.
                </p>
            </div>
        </div>
    );
};
