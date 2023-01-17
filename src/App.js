import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BudgetCard from "./components/BudgetCard";
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";
import { useState } from "react";
import {
  UNCATEGORIZED_BUDGET_ID,
  useBudgets,
} from "./contexts/BudgetsContexts";
import AddExpemseModal from "./components/AddExpenseModal";
import TotalBudgetCard from "./components/TotalBudgetCard";

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpensesModal, setShowAddExpensesModal] = useState(false);
  const [addExpensesModalBudgetId, setAddExpensesModalBudgetId] = useState();

  function openAddExpenseModal(budgetId) {
    setShowAddExpensesModal(true);
    setAddExpensesModalBudgetId(budgetId);
  }

  const { budgets, expenses, getBudgetExpenses } = useBudgets();
  // budgets.map((test) => {
  //   console.log(test);
  // });
  return (
    <>
      <Container>
        <Stack direction="horizontal" gap="2" className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button
            variant="primary"
            onClick={() => {
              setShowAddBudgetModal(true);
            }}
          >
            Add Budget
          </Button>
          <Button
            variant="outline-primary"
            onClick={() => {
              setShowAddExpensesModal(true);
            }}
          >
            Add Expense
          </Button>
        </Stack>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr)",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          {budgets.map((budget) => {
            const ammount = getBudgetExpenses(budget.id).reduce(
              (total, expense) => total + expense.description.ammount,
              0
            );
            console.log(
              expenses
                .filter(
                  (expenses) =>
                    expenses.description.budgetId ===
                    "d2cd7c71-3974-4cd4-8c7a-bc7e8d192046"
                )
                .reduce(
                  (total, expense) => total + expense.description.ammount,
                  0
                )
            );
            return (
              <BudgetCard
                key={budget.id}
                name={budget.name.name}
                ammount={ammount}
                max={budget.name.max}
                openAddExpenseClick={() => openAddExpenseModal(budget.id)}
              />
            );
          })}

          <UncategorizedBudgetCard
            openAddExpenseClick={() =>
              openAddExpenseModal(UNCATEGORIZED_BUDGET_ID)
            }
          />
          <TotalBudgetCard />
        </div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => {
          setShowAddBudgetModal(false);
        }}
      />
      <AddExpemseModal
        show={showAddExpensesModal}
        handleClose={() => {
          setShowAddExpensesModal(false);
        }}
        defaultBudgetId={addExpensesModalBudgetId}
      />
    </>
  );
}

export default App;
