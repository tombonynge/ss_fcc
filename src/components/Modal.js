import styled from "styled-components";

const Bg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: black;
    opacity: 0.5;
`;

const Fg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    background: white;
    padding: 2em;
    & > button {
        margin: 1em;
    }
`;

const Modal = ({ handleDelete, cancelDelete }) => {
    return (
        <>
            <Bg />
            <Fg>
                <Container>
                    <h1>Are you sure you want to delete this widget?</h1>
                    <button onClick={() => handleDelete()}>Yes absolutey!</button>
                    <button onClick={() => cancelDelete()}>No thanks</button>
                </Container>
            </Fg>
        </>
    );
};

export default Modal;
