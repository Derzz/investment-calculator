import React from "react";

const SavingsItem = (props) => {
  return (
    <tbody>
      <td>{props.year}</td>
      <td>{props.savings}</td>
      <td>{props.interest}</td>
      <td>{props.totalInterest}</td>
      <td>{props.contribution}</td>
    </tbody>
  );
};

export default SavingsItem;
