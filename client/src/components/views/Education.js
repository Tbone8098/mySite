import React from "react";
import "../css/Education.css";
import { useSpring, animated } from "react-spring";
import UW from "../img/UW.jpg";
import CodingDojo from "../img/CodingDojo.png";
import Corban from "../img/Corban.jpg";
import UPH from "../img/UPH.jpg";
import { EducationBox } from "../EducationBox";

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
    const UWMessage =
        "I will start going to University of Washington Bootcamp at the end of November this year (2020). It is a three month program and will focus on MERN.";

    const DojoMessage =
        "My Experience at the Coding Dojo was excelent. It was an intence 14 week program which covered three different full stacks plus a basic Web fundamentals two week course. Each full stack was three weeks of learning and one week for project week. The first stack we covered was python using Django as a framework and the SQLight database. The second stack was MERN and the third stack was C# using ASP.NET and a SQL database. Even though I was self taught before this program I felt like this program filled in a lot of knowledge I missed when teaching myself.";

    const CorbanIndoMessage =
        "My Corban and UPH experiences are linked together. While I was living in Indonesia a school became available at the local university there. They offered a teaching degree that was backed up by Corban University. This meant that by graduating from UPH I also graduated from Corban with a bachelors in primary (elementary) education.";

    return (
        <animated.div
            style={container_props}
            className="row education-container flex-wrap"
        >
            <div className="col-11">
                <animated.div style={card_props} className="row card-row">
                    <EducationBox
                        photo={UW}
                        photoDesc={"University of Washington"}
                        title={"University of Washington"}
                        attended={"Nov 2020 - March 2021"}
                        location={"Seattle, WA"}
                        AOS={"MERN"}
                        my_exp={UWMessage}
                    />
                    <EducationBox
                        photo={CodingDojo}
                        photoDesc={"Coding Dojo"}
                        title={"Coding Dojo"}
                        attended={"July 2020 - Oct 2020"}
                        location={"Bellevue, WA"}
                        AOS={"Python (Django), MERN, C# (ASP.NET)"}
                        my_exp={DojoMessage}
                    />
                    <EducationBox
                        photo={Corban}
                        photoDesc={"Corban University"}
                        title={"Corban University"}
                        attended={"July 2014 - May 2017"}
                        location={"Jakarta, Indonesia"}
                        AOS={"Primary Education"}
                        my_exp={CorbanIndoMessage}
                    />
                    <EducationBox
                        photo={UPH}
                        photoDesc={"Universitas Pelita Harapan"}
                        title={"Universitas Pelita Harapan"}
                        attended={"July 2014 - May 2017"}
                        location={"Jakarta, Indonesia"}
                        AOS={"Primary Education"}
                        my_exp={CorbanIndoMessage}
                    />
                </animated.div>
            </div>
            <div className="col-1">
                <div className="label">
                    <h1>Education</h1>
                </div>
            </div>
        </animated.div>
    );
};
