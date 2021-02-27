import { render, screen, cleanup, fireEvent, getByTestId } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Main from "./components/Main";

afterEach(cleanup);

test("renders hello world", () => {
    render(<App />);
    const header = screen.getByText(/main page/i);
    expect(header).toBeInTheDocument();
});

test("clicking Add Widget link takes us to add widget page", () => {
    const { getByText, getByTestId, queryByText } = render(<App />);
    const link = getByTestId("add-widget-link");
    fireEvent.click(link);
    getByText(/add widget here/i);
    expect(queryByText(/main page/i)).not.toBeInTheDocument();
});

test("Main displays a widget correctly", () => {
    const { getByText, debug } = render(
        <Router>
            <Main widgets={[{ id: 0, name: "Testy McTest", language: "English" }]} />
        </Router>
    );
    debug();
    getByText(/name: testy mctest/i);
});

test("Main maps widgets correctly", () => {
    const { getByText } = render(
        <Router>
            <Main
                widgets={[
                    { id: 0, name: "Testy McTest", language: "English" },
                    { id: 1, name: "Tester Testerson", language: "Spanish" },
                ]}
            />
        </Router>
    );
    getByText(/name: testy mctest/i);
    getByText(/name: tester testerson/i);
});
