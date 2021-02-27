import { useState, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    background: ghostwhite;
    padding: 2rem;
`;

const languageOptions = ["English", "German", "French", "Spanish"];

// choosing a language
const Step1 = ({ updateStep }) => {
    const ref = useRef();
    return (
        <>
            <h1>Step 1</h1>
            <p>Please select a language</p>
            <select ref={ref}>
                {languageOptions.map((language, i) => (
                    <option key={i}>{language}</option>
                ))}
            </select>
            <button onClick={() => updateStep("language", ref.current.value)} data-testid="step1-btn">
                Next
            </button>
        </>
    );
};

// choosing a name
const Step2 = ({ updateStep }) => {
    const [error, setError] = useState("");
    const handleSubmit = (e) => {
        if (e.target.name.value === "") {
            setError("*Name must be at least one character, only uppercase or lowercase letters allowed.");
        } else {
            updateStep("name", e.target.name.value);
        }
        e.preventDefault();
    };

    return (
        <>
            <h1>Step 2</h1>
            <p>Please enter a name</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="John Smith" pattern="^[a-zA-Z\s]+$" data-testid="name-input" />
                <button type="submit" data-testid="step2-btn">
                    Create Widget
                </button>
            </form>
            {error && <p style={{ color: "tomato" }}>{error}</p>}
        </>
    );
};

const AddWidget = ({ createWidget }) => {
    const [step, setStep] = useState(1);
    const [data, setData] = useState({ language: "", name: "" });
    const history = useHistory();

    const updateStep = (type, val) => {
        const temp = data;
        temp[type] = val;
        setData(temp);
        if (step === 1) {
            setStep(step + 1);
        } else {
            //create widget and go back to main....
            createWidget(data);
            history.push("/");
        }
    };

    return (
        <>
            <Link to={"/"}>Back to main</Link>
            <h1>Add Widget Wizard</h1>
            <Container>
                {step === 1 && <Step1 updateStep={updateStep} />}
                {step === 2 && <Step2 updateStep={updateStep} />}
            </Container>
        </>
    );
};

export default AddWidget;
