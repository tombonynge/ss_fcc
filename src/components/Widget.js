import styled from "styled-components";

const Container = styled.div`
    width: 150px;
    background: white;
    border-radius: 10px;
    padding: 1rem;
    text-align: left;
    -webkit-box-shadow: 12px 11px 21px -6px rgba(0, 0, 0, 0.43);
    box-shadow: 12px 11px 21px -6px rgba(0, 0, 0, 0.43);
    position: relative;
`;

const Widget = ({ id, name, language, checkDelete }) => {
    return (
        <Container id="widget-container">
            <p>Name: {name}</p>
            <p>Language: {language}</p>
            <button onClick={() => checkDelete(id)}>Delete</button>
        </Container>
    );
};

export default Widget;
