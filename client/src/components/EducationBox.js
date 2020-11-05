import React from "react";
import "./css/Education.css";

export const EducationBox = (props) => {
    return (
        <div className="card Yborder mx-3 mt-3 col-lg">
            <h1 className="card-title tYellow">{props.title}</h1>
            <div className="card_content">
                <div className="school_info col">
                    <div className="row d-flex justify-content-center">
                        <div className="img-box">
                            <img
                                className="card_img"
                                src={props.photo}
                                alt={props.photoDesc}
                            />
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <table className="table">
                            <tr>
                                <td>Attended:</td>
                                <td>{props.attended}</td>
                            </tr>
                            <tr>
                                <td>Location:</td>
                                <td>{props.location}</td>
                            </tr>
                            <tr>
                                <td>Area of Study:</td>
                                <td>{props.AOS}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <div>
                    <h5>
                        <u>My Experience</u>
                    </h5>
                    <p>{props.my_exp}</p>
                </div>
            </div>
        </div>
    );
};
