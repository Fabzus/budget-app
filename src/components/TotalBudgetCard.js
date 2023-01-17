import BudgetCard from "./BudgetCard";
import { useBudgets } from "../contexts/BudgetsContexts";

function TotalBudgetCard() {
  const { expenses, budgets } = useBudgets();
  const ammount = expenses.reduce(
    (total, expense) => total + expense.description.ammount,
    0
  );
  const max = budgets.reduce((total, expense) => total + expense.name.max, 0);
  if (max === 0) return null;
  return (
    <BudgetCard ammount={ammount} name="Total" gray max={max} hideButtons />
  );
}

export default TotalBudgetCard;
