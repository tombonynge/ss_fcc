import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import App from "./App";

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
