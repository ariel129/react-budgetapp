import React, {useContext, useState} from 'react';
import './index.scss';
import Header from '../Header';
import Swal from 'sweetalert2';

import {BudgetContext} from '../Context/Context';

function IncomeExpenseInput() {
  const {dispatch} = useContext(BudgetContext);
  const [option, setOption] = useState('plus');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleOption = (e) => {
    setOption(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleAmount = (e) => {
    const allow = /^[0-9\b]+$/;
    if (e.target.value === '' || allow.test(e.target.value)) {
      setAmount(e.target.value);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      Swal.fire(
          'Information',
          'Please input the description',
          'info',
      );
    } else if (!amount) {
      Swal.fire(
          'Information',
          'Please input the amount',
          'info',
      );
    } else {
      dispatch({
        type: 'ADD_BUDGET',
        budget: {
          option,
          description,
          amount,
        },
      });
    }
  };

  return (
      <div>
        <form className="income-expense-insertion" onSubmit={onSubmit}>
          <Header/>
          <select className="options" onChange={handleOption} value={option}>
            <option className="plus" value="plus">+</option>
            <option className="minus" value="minus">-</option>
          </select>
          <input type="text" className="description" placeholder="Description"
                 value={description}
                 onChange={handleDescription}/>
          <input type="text" className="amount" value={amount}
                 onChange={handleAmount}/>
          <button className="add button-label" type="submit">Add</button>
        </form>
      </div>
  );
}

export default IncomeExpenseInput;