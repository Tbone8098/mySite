import "./App.css";
import "./components/css/NavBar.css";
import "./components/css/utilities.css";

import { NavBar } from "./components/views/NavBar";
import { Main } from "./components/views/Main";
import { Router } from "@reach/router";
import { Contactme } from "./components/views/Contactme";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Router>
                <Main path="/" />
                <Contactme path="/contactme" />
            </Router>
        </div>
    );
}

export default App;
