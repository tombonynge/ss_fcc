import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./components/Main";
import AddWidget from "./components/AddWidget";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={"/"}>
                        <Main />
                    </Route>
                    <Route path={"/addwidget"}>
                        <AddWidget />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
