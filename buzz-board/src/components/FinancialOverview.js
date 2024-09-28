import React from 'react';

const FinancialOverview = ({ data }) => {
  const totalRevenue = data.totalRevenue || 0;
  const profitMargin = data.profitMargin || 0;
  const income = data.income || 0;
  const expenses = data.expenses || 0;

  return (
    <div className="card">
      <h3>Financial Overview</h3>
      <p>Total Revenue: ${totalRevenue}</p>
      <p>Profit Margin: {profitMargin}%</p>
      <p>Income: ${income}</p>
      <p>Expenses: ${expenses}</p>
    </div>
  );
};

export default FinancialOverview;
