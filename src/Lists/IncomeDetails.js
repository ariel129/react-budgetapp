import React, {useContext} from 'react';
import {BudgetContext} from '../Context/Context';
import {FaTrashAlt} from 'react-icons/fa';

const IncomeDetails = ({budget}) => {
  const {dispatch} = useContext(BudgetContext);

  const handleDelete = () => {
    dispatch({
      type: 'REMOVE_BUDGET',
      id: budget.description,
    });
  };

  return (
      <li onClick={handleDelete}>
        <div><FaTrashAlt/>{budget.description + ' ' +
        budget.amount} </div>
      </li>
  );
};

export default IncomeDetails;