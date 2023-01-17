import { Button, Stack } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import BudgetCard from "./components/BudgetCard";

function App() {
  return (
    <Container>
      <Stack direction="horizontal" gap="2" className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button variant="primary">Add Budget</Button>
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
        <BudgetCard name="test" ammount={810} max={100}></BudgetCard>
        <BudgetCard name="test" ammount={10} max={100} gray></BudgetCard>
        <BudgetCard name="test" ammount={20} max={100}></BudgetCard>
        <BudgetCard name="test" ammount={30} max={100}></BudgetCard>
        <BudgetCard name="test" ammount={40} max={100}></BudgetCard>
        <BudgetCard name="test" ammount={50} max={100}></BudgetCard>
      </div>
    </Container>
  );
}

export default App;
