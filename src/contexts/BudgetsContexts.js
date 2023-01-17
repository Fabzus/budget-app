import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";

const BudgetsContext = React.createContext();

export function useBudgets() {
  return useContext(BudgetsContext);
}
export const BudgetProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);

  const [expenses, setExpenses] = useState([]);

  function getBudgetExpenses(budgetID) {
    return expenses.filter((expenses) => expenses.budgetID === budgetID);
  }
  function addExpense(description, ammount, budgetID) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { id: uuidV4, description, ammount, budgetID }];
    });
  }
  function addBudget(name, max) {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: uuidV4, name, max }];
    });
  }
  function deleteBudget({ id }) {
    // TODO Deal with uncategorized budgets
    setBudgets((prevBudgets) => {
      return prevBudgets.filter((budget) => budget.id !== id);
    });
  }
  function deleteExpense({ id }) {
    setExpenses((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  }

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpenses,
        addExpense,
        addBudget,
        deleteBudget,
        deleteExpense,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};
