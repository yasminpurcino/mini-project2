import React, { useEffect, useState } from 'react'



function Calculator() {
    // — prevValue in useState hook. update an object with react hooks
    // useState is a Hook (function) that allows you to have state variables
    // in functional components. You pass the initial state to this function 
    // and it returns a variable with the current state value (not necessarily the
    // initial state) and another function to update this value.

    const [prevValue, setPrevValue] = useState('');
    const [nextValue, setNextValue] = useState('');
    const [result, setResult] = useState("")


    const CalculatorOperations = {
        "+": (firstValue, secondValue) => parseInt(firstValue) + parseInt(secondValue),
        "-": (firstValue, secondValue) => firstValue - secondValue,
        "/": (firstValue, secondValue) => firstValue / secondValue,
        "*": (firstValue, secondValue) => firstValue * secondValue,
        "c": (firstValue, secondValue) => ""

    };


    const handleOperation = (e) => {

        console.log(e.target.innerHTML)
      
        setResult(CalculatorOperations[e.target.innerHTML](prevValue, nextValue))
   

    };


    return (
        <div>
            <h1> Calculator</h1>

            <div>

                <input type="text" placeholder="firstValue" onChange={e => setPrevValue(e.target.value)} />
                <input type="text" placeholder="secondValue" onChange={e => setNextValue(e.target.value)} />

                <button onClick={handleOperation}>+</button>
                <button onClick={handleOperation}>-</button>
                <button onClick={handleOperation}>/</button>
                <button onClick={handleOperation}>*</button>

                {/* <CalculatorKey keyValue={"-"} onClick={handleOperation} />
                <CalculatorKey keyValue={"*"} onClick={handleOperation} />
                <CalculatorKey keyValue={"/"} onClick={handleOperation} />
                <CalculatorKey keyValue={"c"} onClick={handleOperation} /> */}

                <input type="text" placeholder="result" value={result} readOnly />

            </div>
        </div>
    );

}

export default Calculator;