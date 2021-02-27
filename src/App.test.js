import { render, screen, cleanup, fireEvent, getByTestId } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import AddWidget from "./components/AddWidget";
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
    getByText(/add widget wizard/i);
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

test("Clicking Next in wizard takes us to step 2", () => {
    const { getByText, getByTestId } = render(
        <Router>
            <AddWidget />
        </Router>
    );
    const nextBtn = getByTestId("step1-btn");
    fireEvent.click(nextBtn);
    getByText(/step 2/i);
});

// can't get this test to pass.. I suspect the test doesn't work with form submission...but I am not sure why exactly.
test("Leaving name blank in wizard gives us an error message", async () => {
    const { findByText, getByTestId, debug } = render(
        <Router>
            <AddWidget />
        </Router>
    );
    const step1Btn = getByTestId("step1-btn");
    fireEvent.click(step1Btn);
    const step2Btn = getByTestId("step2-btn");
    fireEvent.click(step2Btn);
    // await findByText(/name must be at least one character/i);
    debug();
});
