import React from 'react';
import './index.scss';

import IncomeList from './IncomeList';
import ExpenseList from './ExpenseList';

function Lists() {
  return (
      <div className="income-expense-lists">
        <IncomeList/>
        <ExpenseList/>
      </div>
  );
}

export default Lists;