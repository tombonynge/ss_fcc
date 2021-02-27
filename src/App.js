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

    const createWidget = (data) => {
        const temp = widgets;
        data.id = widgets.length;
        temp.push(data);
        setWidgets(temp);
    };

    const removeWidget = (id) => {
        let updatedWidgets = widgets.filter((w) => w.id !== id);
        updatedWidgets = updatedWidgets.map((w, i) => {
            w.id = i;
            return w;
        });
        setWidgets(updatedWidgets);
        console.log(updatedWidgets);
    };

    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path={"/"}>
                        <Main widgets={widgets} removeWidget={removeWidget} />
                    </Route>
                    <Route path={"/addwidget"}>
                        <AddWidget createWidget={createWidget} />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
