import React, {useContext} from 'react';
import './index.scss';
import {BudgetContext} from '../Context/Context';
import IncomeDetails from './IncomeDetails';

const IncomeList = () => {
  const {budgets} = useContext(BudgetContext);

  return budgets.length ? (
      <div className="">
        <h3 className="income-list income-header">Income</h3>
        <ul className="income-list income-expense-lists list-item list-item-content">
          {
            budgets.map(budget => {
              if (budget.options == 'plus') {
                return (
                    <IncomeDetails budget={budget} key={budget.description}/>
                );
              }
            })
          }
        </ul>
      </div>
  ) : <div className="">
    <h3 className="income-list income-header">Income</h3>
  </div>;
};

export default IncomeList;