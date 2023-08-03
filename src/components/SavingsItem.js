import React from "react";

const SavingsItem = (props) => {
  return (
    <tbody>
      <td>{props.year}</td>
      <td>{props.savings}</td>
      <td>{props.yearlyInterest}</td>
      <td>{props.totalInterest}</td>
      <td>{props.investedCapital}</td>
    </tbody>
  );
};

export default SavingsItem;
