import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./components/Main";
import AddWidget from "./components/AddWidget";

import "./App.css";

const testWidgets = [
    { id: 0, name: "Sam Jones", language: "English" },
    { id: 1, name: "Maria Pericas", language: "Spanish" },
];

function App() {
    const [widgets, setWidgets] = useState(testWidgets);
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={"/"}>
                        <Main widgets={widgets} />
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
