import React from "react";
import "../css/Education.css";
import UWImg from "../img/UW.jpg";
import CodingDojo from "../img/CodingDojo.png";
import Corban from "../img/Corban.jpg";
import UPH from "../img/UPH.jpg";

export const Education = () => {
    return (
        <div className="row">
            <div className="card Yborder mx-3 mt-3 col-lg">
                <h1 className="tYellow">University of Washington</h1>
                <div className="row">
                    <img className="card_img" src={UWImg} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam ab laudantium illo quibusdam fuga hic ex incidunt?
                        Deleniti saepe maxime assumenda laborum voluptatibus.
                        Laudantium aperiam obcaecati ut quas id expedita.
                    </p>
                </div>
            </div>
            <div className="card Yborder mx-3 mt-3 col-lg">
                <h1 className="tYellow">Coding Dojo</h1>
                <div className="row">
                    <img className="card_img" src={CodingDojo} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam ab laudantium illo quibusdam fuga hic ex incidunt?
                        Deleniti saepe maxime assumenda laborum voluptatibus.
                        Laudantium aperiam obcaecati ut quas id expedita.
                    </p>
                </div>
            </div>
            <div className="card Yborder mx-3 mt-3 col-lg">
                <h1 className="tYellow">Corban University</h1>
                <div className="row">
                    <img className="card_img" src={Corban} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam ab laudantium illo quibusdam fuga hic ex incidunt?
                        Deleniti saepe maxime assumenda laborum voluptatibus.
                        Laudantium aperiam obcaecati ut quas id expedita.
                    </p>
                </div>
            </div>
            <div className="card Yborder mx-3 mt-3 col-lg">
                <h1 className="tYellow">Universitas Pelita Harapan</h1>
                <div className="row">
                    <img className="card_img" src={UPH} alt="" />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam ab laudantium illo quibusdam fuga hic ex incidunt?
                        Deleniti saepe maxime assumenda laborum voluptatibus.
                        Laudantium aperiam obcaecati ut quas id expedita.
                    </p>
                </div>
            </div>
        </div>
    );
};
