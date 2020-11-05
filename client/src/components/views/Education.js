import React from "react";
import { useSpring, animated } from "react-spring";
import "../css/Education.css";
import UWImg from "../img/UW.jpg";
import CodingDojo from "../img/CodingDojo.png";
import Corban from "../img/Corban.jpg";
import UPH from "../img/UPH.jpg";

export const Education = () => {
    const container_props = useSpring({
        from: { marginRight: "-1000px" },
        to: { marginRight: "0px" },
        config: { duration: 500 },
    });

    const card_props = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { duration: 1000 },
    });
    return (
        <animated.div style={container_props} className="row">
            <animated.div
                style={card_props}
                className="card Yborder mx-3 mt-3 col-lg"
            >
                <h1 className="tYellow">University of Washington</h1>
                <div className="card_content row">
                    <img
                        className="card_img"
                        src={UWImg}
                        alt="University of Washington"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam ab laudantium illo quibusdam fuga hic ex incidunt?
                        Deleniti saepe maxime assumenda laborum voluptatibus.
                        Laudantium aperiam obcaecati ut quas id expedita.
                    </p>
                </div>
            </animated.div>
            <animated.div
                style={card_props}
                className="card Yborder mx-3 mt-3 col-lg"
            >
                <h1 className="tYellow">Coding Dojo</h1>
                <div className="card_content row">
                    <img
                        className="card_img"
                        src={CodingDojo}
                        alt="Coding Dojo"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam ab laudantium illo quibusdam fuga hic ex incidunt?
                        Deleniti saepe maxime assumenda laborum voluptatibus.
                        Laudantium aperiam obcaecati ut quas id expedita.
                    </p>
                </div>
            </animated.div>
            <animated.div
                style={card_props}
                className="card Yborder mx-3 mt-3 col-lg"
            >
                <h1 className="tYellow">Corban University</h1>
                <div className="card_content row">
                    <img
                        className="card_img"
                        src={Corban}
                        alt="Corban University"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam ab laudantium illo quibusdam fuga hic ex incidunt?
                        Deleniti saepe maxime assumenda laborum voluptatibus.
                        Laudantium aperiam obcaecati ut quas id expedita.
                    </p>
                </div>
            </animated.div>
            <animated.div
                style={card_props}
                className="card Yborder mx-3 mt-3 col-lg"
            >
                <h1 className="tYellow">Universitas Pelita Harapan</h1>
                <div className="card_content row">
                    <img
                        className="card_img"
                        src={UPH}
                        alt="Universitas Pelita Harapan"
                    />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ullam ab laudantium illo quibusdam fuga hic ex incidunt?
                        Deleniti saepe maxime assumenda laborum voluptatibus.
                        Laudantium aperiam obcaecati ut quas id expedita.
                    </p>
                </div>
            </animated.div>
        </animated.div>
    );
};
