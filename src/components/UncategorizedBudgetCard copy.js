import BudgetCard from "./BudgetCard";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "../contexts/BudgetsContexts";

function UncategorizedBudgetCard(props) {
  const { getBudgetExpenses } = useBudgets();
  const ammount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
    (total, expense) => total + expense.description.ammount,
    0
  );
  if (ammount === 0) return null;
  return <BudgetCard ammount={ammount} name="Uncategorized" gray {...props} />;
}

export default UncategorizedBudgetCard;
