import { useState } from "react";
import "./App.css";
import "./components/css/index.css";
import "./components/css/mediumScreens.css";
import "./components/css/largeScreens.css";
import { Router } from "@reach/router";
import { Main } from "./components/views/Main";
import { NavBar } from "./components/NavBar";
import { Mystory } from "./components/views/Mystory";
import { Mywork } from "./components/views/Mywork";
import { Contactme } from "./components/views/Contactme";
import $ from "jquery";

function App() {
    const [activePage, setActivePage] = useState("");

    const newPage = (newPage) => {
        setActivePage(newPage);
    };

    return (
        <div className="App">
            <div className="wrapper">
                <NavBar activePage={activePage} />
                <Router className="routerWrapper">
                    <Main path="/" newPage={newPage} />
                    <Mystory path="/mystory" newPage={newPage} />
                    <Mywork path="/mywork" newPage={newPage} />
                    <Contactme path="/contactme" newPage={newPage} />
                </Router>
            </div>
        </div>
    );
}

export default App;
