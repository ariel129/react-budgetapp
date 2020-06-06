import React, {useContext} from 'react';
import './index.scss';
import {BudgetContext} from '../Context/Context';

function Header() {
  const {budgets} = useContext(BudgetContext);

  const income = budgets.filter(({options}) => options === 'plus')
      .reduce((total, expense) => total + parseInt(expense.amount, 10), 0);

  const expense = budgets.filter(({options}) => options === 'minus')
      .reduce((total, expense) => total + parseInt(expense.amount, 10), 0);

  const current = (income || expense) ? income - expense : '0';

  return (
      <div className="app-header">
        <h1 className="current-budget-header">Current Budget</h1>
        <div>
          <h3>{current}</h3>
        </div>
        <div>
          <h3 className="income">{income}</h3>
        </div>
        <div>
          <h3 className="expense">{expense}</h3>
        </div>
      </div>
  );
}

export default Header;
