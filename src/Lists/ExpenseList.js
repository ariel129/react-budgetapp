import React, {useContext} from 'react';
import './index.scss';
import {BudgetContext} from '../Context/Context';
import ExpenseDetails from './ExpenseDetails';

function ExpenseList() {
  const {budgets} = useContext(BudgetContext);

  return budgets.length ? (
      <div className="">
        <h3 className="expense-list expense-header">Expense</h3>
        <ul className="income-list income-expense-lists list-item list-item-content">
          {
            budgets.map(budget => {
              if (budget.options == 'minus') {
                return (
                    <ExpenseDetails budget={budget} key={budget.description}/>
                );
              }
            })
          }
        </ul>
      </div>
  ) : <div>
    <h3 className="expense-list expense-header">Expense</h3>
  </div>;
}

export default ExpenseList;