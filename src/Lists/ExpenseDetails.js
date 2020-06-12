import React, {useContext} from 'react';
import {BudgetContext} from '../Context/Context';
import {FaTrashAlt} from 'react-icons/fa';
import moment from 'moment';

const ExpenseDetails = ({budget}) => {
  const {dispatch} = useContext(BudgetContext);
  const dt = moment(budget.date).format('MM/DD/YYYY');

  const handleDelete = () => {
    dispatch({
      type: 'REMOVE_BUDGET',
      id: budget.description,
    });
  };

  return (
      <li onClick={handleDelete}>
        <div><FaTrashAlt/>{budget.description + ' ' +
        budget.amount + ' ' + dt} </div>
      </li>
  );
};

export default ExpenseDetails;