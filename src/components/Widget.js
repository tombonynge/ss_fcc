import styled from "styled-components";

const Container = styled.div`
    width: 150px;
    background: white;
    border-radius: 10px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    -webkit-box-shadow: 12px 11px 21px -6px rgba(0, 0, 0, 0.43);
    box-shadow: 12px 11px 21px -6px rgba(0, 0, 0, 0.43);
`;

const Widget = ({ id, name, language }) => {
    return (
        <Container>
            <p>Name: {name}</p>
            <p>Language: {language}</p>
        </Container>
    );
};

export default Widget;
