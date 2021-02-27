import { Link } from "react-router-dom";
import Widget from "./Widget";
import styled from "styled-components";

const WidgetContainer = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    background: lightgrey;
    gap: 2em;
    padding: 2rem;
`;

const Main = ({ widgets }) => {
    return (
        <>
            <h1>Main Page</h1>
            <WidgetContainer>
                {widgets.map((widget) => (
                    <Widget id={widget.id} name={widget.name} language={widget.language} />
                ))}
            </WidgetContainer>
            <Link to={"/addwidget"} data-testid="add-widget-link">
                Add Widget
            </Link>
        </>
    );
};

export default Main;
