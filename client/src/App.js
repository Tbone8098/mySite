import "./App.css";
import "./components/css/NavBar.css";
import "./components/css/utilities.css";

import { NavBar } from "./components/views/NavBar";
import { Main } from "./components/views/Main";

function App() {
    return (
        <div className="App">
            <div className="container-fluid">
                <NavBar />
                <Main />
            </div>
        </div>
    );
}

export default App;
