import React from "react";
import "../css/ContactMe.css";
import nodemailer from "nodemailer";

export const Contactme = () => {
    return (
        <div className="contact_me_container">
            <div className="contact_me_box">
                <h1 className="tYellow">Contact me</h1>
                <h3>Email: Thibault.tyler@gmail.com</h3>
            </div>
        </div>
    );
};
