import logo from "./assets/investment-calculator-logo.png";
import React, { useState } from "react";
import ItemTable from './components/ItemTable';

function App() {
  const [enteredCurrentSavings, setEnteredCurrentSavings] = useState("");
  const [enteredYearlySavings, setEnteredYearlySavings] = useState("");
  const [expectedInterest, setExpectedInterest] = useState("");
  const [expectedDuration, setExpectedDuration] = useState("");

  const[data, setData] = useState([]);

  const currentSavingsHandler = (event) => {
    setEnteredCurrentSavings(event.target.value);
  };

  const yearlySavingsHandler = (event) => {
    setEnteredYearlySavings(event.target.value);
  };

  const expectedInterestHandler = (event) => {
    setExpectedInterest(event.target.value);
  };

  const expectedDurationHandler = (event) => {
    setExpectedDuration(event.target.value);
  };

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const calculateHandler = () => {
    
    const yearlyData = []; // per-year results
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...
    console.log("clicked!");

    let currentSavings = parseFloat(enteredCurrentSavings); // feel free to change the shape of this input object!
    const yearlyContribution = parseFloat(enteredYearlySavings); // as mentioned: feel free to change the shape...
    const expectedReturn = parseFloat(expectedInterest) / 100;
    const duration = expectedDuration;

    let totalInterest = 0
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      totalInterest += yearlyInterest;
      const investedCapital = currentSavings + yearlyContribution*(i+1)
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        id: i,
        year: i + 1,
        savings: formatter.format(currentSavings).toString(),
        yearlyInterest: formatter.format(yearlyInterest).toString(),
        totalInterest: formatter.format(totalInterest).toString(),
        investedCapital: formatter.format(investedCapital).toString(),
      });
    }
    setData(yearlyData);

    console.log(yearlyData);
  };

  const resetHandler = () => {
    setEnteredCurrentSavings('');
    setEnteredYearlySavings('');
    setExpectedDuration('');
    setExpectedInterest('');
  }

  return (
    <div>
      <header className="header">
        <img src={logo} alt="logo" />
        <h1>Investment Calculator</h1>
      </header>

      <form className="form" onSubmit={calculateHandler}>
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input
              type="number"
              min="0"
              value={enteredCurrentSavings}
              onChange={currentSavingsHandler}
              id="current-savings"
            />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input
              type="number"
              min="0"
              value={enteredYearlySavings}
              onChange={yearlySavingsHandler}
              id="yearly-contribution"
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input
              type="number"
              min="0"
              value={expectedInterest}
              onChange={expectedInterestHandler}
              id="expected-return"
            />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input
              type="number"
              min="0"
              value={expectedDuration}
              onChange={expectedDurationHandler}
              id="duration"
            />
          </p>
        </div>
        <p className="actions">
          <button onClick={resetHandler} type="reset" className="buttonAlt">
            Reset
          </button>
          <button onClick={calculateHandler} type="button" className="button">
            Calculate
          </button>
        </p>
      </form>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ItemTable items={data}/>
    </div>
  );
}

export default App;
