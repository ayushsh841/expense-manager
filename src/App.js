import React, { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  { id: 'e1', title: 'Car Insurance', amount: 294.67, date: new Date(2022, 2, 28) },
  { id: 'e2', title: 'Playstation', amount: 500, date: new Date(2021, 4, 1) },
  { id: 'e3', title: 'Phone', amount: 399, date: new Date(2021, 4, 13) },
  { id: 'e4', title: 'Home Decor', amount: 99.99, date: new Date(2020, 1, 13) },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
