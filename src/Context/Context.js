import React, {createContext, useReducer, useEffect} from 'react';
import {budgetReducer} from '../Reducer/budgetReducer';

export const BudgetContext = createContext();

const BudgetContextProvider = (props) => {
  const [budgets, dispatch] = useReducer(budgetReducer, [], () => {
    const session = localStorage.getItem('expenses');

    return session ? JSON.parse(session) : [];
  });

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(budgets));
  }, [budgets]);

  return (
      <BudgetContext.Provider value={{budgets, dispatch}}>
        {props.children}
      </BudgetContext.Provider>
  );
};

export default BudgetContextProvider;