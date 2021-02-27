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

const Main = ({ widgets, removeWidget }) => {
    return (
        <>
            <h1>Main Page</h1>
            <WidgetContainer>
                {widgets.map((w) => (
                    <Widget key={w.id} id={w.id} name={w.name} language={w.language} removeWidget={removeWidget} />
                ))}
            </WidgetContainer>
            <Link to={"/addwidget"} data-testid="add-widget-link">
                Add Widget
            </Link>
        </>
    );
};

export default Main;
