import React from "react";
import SavingsItem from "./SavingsItem";
import "../index.css";

const ItemTable = (props) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
        {props.items.map((item) => (
          <SavingsItem
            key={item.id}
            year={item.year}
            savings={item.savingsEndOfYear}
            interest={item.yearlyInterest}
            totalInterest={item.totalInterest}
            contribution={item.yearlyContribution}
          />
        ))}
    </table>
  );
};

export default ItemTable;
