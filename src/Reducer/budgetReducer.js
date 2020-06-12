export const budgetReducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_BUDGET':
      return [
        ...state, {
          options: action.budget.option,
          description: action.budget.description,
          amount: action.budget.amount,
          date: new Date()
        },
      ];
    case 'REMOVE_BUDGET':
      return state.filter(budget => budget.description !== action.id);
    default:
      return state;
  }
};