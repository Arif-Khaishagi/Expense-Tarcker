// src/components/ExpenseSummary.js
import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const ExpenseSummary = ({ expenses }) => {
  const data = expenses.reduce((acc, { category, amount }) => {
    const existing = acc.find(item => item.name === category);
    if (existing) {
      existing.value += amount;
    } else {
      acc.push({ name: category, value: amount });
    }
    return acc;
  }, []);

  return (
    <div className="expense-summary">
      <h2>Expense Summary</h2>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8884d8' : '#82ca9d'} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default ExpenseSummary;
