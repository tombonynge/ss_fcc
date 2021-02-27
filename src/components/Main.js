import { Link } from "react-router-dom";

const Main = () => {
    return (
        <>
            <h1>Main Page</h1>
            <Link to={"/addwidget"} data-testid="add-widget-link">
                Add Widget
            </Link>
        </>
    );
};

export default Main;
