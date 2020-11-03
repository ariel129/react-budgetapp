import React from 'react';
import './App.css';

import BudgetContextProvider from './Context/Context';
import IncomeExpenseInput from './Inputs';
import Lists from './Lists'

function App() {
  return (
      <div className="App">
        <BudgetContextProvider>
          <IncomeExpenseInput/>
          <Lists />
        </BudgetContextProvider>
      </div>
  );
}

export default App;
