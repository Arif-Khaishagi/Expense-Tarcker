// src/components/WalletBalance.js
import React, { useState, useEffect } from 'react';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';

const WalletBalance = ({ balance, onAddIncome }) => {
  const [income, setIncome] = useState('');

  const handleAddIncome = () => {
    if (parseFloat(income) <= 0) return;
    onAddIncome(parseFloat(income));
    setIncome('');
  };

  return (
    <div className="wallet-balance">
      <h2>Wallet Balance: ${balance.toFixed(2)}</h2>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        placeholder="Add Income"
      />
      <button onClick={handleAddIncome}>Add</button>
    </div>
  );
};

export default WalletBalance;
