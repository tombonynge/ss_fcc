import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Main from "./components/Main";
import AddWidget from "./components/AddWidget";

import "./App.css";

const updateLocalWidgets = (widgets) => {
    window.localStorage.setItem("widgets", JSON.stringify(widgets));
};

function App() {
    const [widgets, setWidgets] = useState([]);

    const createWidget = (data) => {
        const temp = widgets;
        data.id = widgets.length;
        temp.push(data);
        setWidgets(temp);
        updateLocalWidgets(temp);
    };

    const removeWidget = (id) => {
        let updatedWidgets = widgets.filter((w) => w.id !== id);
        updatedWidgets = updatedWidgets.map((w, i) => {
            w.id = i;
            return w;
        });
        setWidgets(updatedWidgets);
        updateLocalWidgets(updatedWidgets);
    };

    useEffect(() => {
        const localWidgets = window.localStorage.getItem("widgets");
        if (localWidgets) {
            let widgets = JSON.parse(localWidgets);
            if (widgets[0]?.name) {
                setWidgets(JSON.parse(localWidgets));
            } else {
                // the widgets are invalid..just set widgets to an empty array
                setWidgets([]);
            }
        }
    }, []);

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
