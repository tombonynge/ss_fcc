import { useState } from "react";
import { Link } from "react-router-dom";
import Widget from "./Widget";
import Modal from "./Modal";
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
    const [showModal, setShowModal] = useState(false);
    const [idToDelete, setIdToDelete] = useState(null);

    const checkDelete = (id) => {
        setIdToDelete(id);
        setShowModal(true);
    };

    const handleDelete = () => {
        setShowModal(false);
        removeWidget(idToDelete);
    };

    const cancelDelete = () => {
        setShowModal(false);
        setIdToDelete(null);
    };

    return (
        <>
            {showModal && <Modal handleDelete={handleDelete} cancelDelete={cancelDelete} />}
            <h1>Main Page</h1>
            <WidgetContainer>
                {widgets.length === 0 && <p>You currently have no widgets 😿. Why not create some?</p>}
                {widgets.map((w) => (
                    <Widget key={w.id} id={w.id} name={w.name} language={w.language} checkDelete={checkDelete} />
                ))}
            </WidgetContainer>
            <Link to={"/addwidget"} data-testid="add-widget-link">
                Add Widget
            </Link>
        </>
    );
};

export default Main;
