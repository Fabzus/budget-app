import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";
import { useState } from "react";
import { BudgetProvider, useBudgets } from "./contexts/BudgetsContexts";

function App() {
  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const { budgets, expenses, getBudgetExpenses } = useBudgets();
  budgets.map((test) => {
    console.log(test);
  });
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
          <Button variant="outline-primary">Add Expense</Button>
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
              (total, expense) => total + expense.ammount,
              0
            );
            return (
              <BudgetCard
                key={budget.id}
                name={budget.name.name}
                ammount={ammount}
                max={budget.name.max}
              />
            );
          })}
          <BudgetCard name="test" ammount={810} max={100}></BudgetCard>
        </div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => {
          setShowAddBudgetModal(false);
        }}
      />
    </>
  );
}

export default App;
