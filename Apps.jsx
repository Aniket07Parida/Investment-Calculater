import React from "react";
import { useState } from "react";
import Result from "./Results";
import Inputs from "./Inputs";
import Heading from "./src/Headings";

export default function App() {
    const [InputValue, setInputValue] = useState({ initialInvestment: 10000, annualInvestment: 1200, expectedReturn: 6, duration: 10 });
    const inputValid = InputValue.duration >= 1;
    
    function handelChange(Inputidentyfier, newValue) {
        setInputValue(prevInput => {
            return {
                ...prevInput,
                [Inputidentyfier]:+newValue
            }
        })
    }

    return (
        <>
            <Heading />
            <Inputs InputValue={InputValue} onChange={handelChange} />
            {!inputValid && <p className="center">Plese Enter duration grater then Zero</p>}
            {inputValid && <Result Output={InputValue} /> }
        </>
    )
}