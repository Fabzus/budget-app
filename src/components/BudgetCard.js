import { Button, Card, ProgressBar, Stack } from "react-bootstrap";
import { currencyFormatter } from "../utils";

function BudgetCard({ name, ammount, max, gray, openAddExpenseClick }) {
  const classNames = [];
  if (ammount > max) {
    classNames.push("bg-danger", "bg-opacity-10");
  } else if (gray) {
    classNames.push("bg-light");
  }
  return (
    <Card className={classNames.join(" ")}>
      <Card.Body>
        <Card.Title className="d-flex justify-content-between align-items-baseline fw-normal mb-3">
          <div className="me-2">{name}</div>
          <div className="d-flex align-items-baseline">
            {currencyFormatter.format(ammount)}
            {max && (
              <span className="text-muted fs-6 ms-1">
                /{currencyFormatter.format(max)}
              </span>
            )}
          </div>
        </Card.Title>
        {max && (
          <ProgressBar
            className="rounded-pill"
            variant={getProgressBarVariant(ammount, max)}
            min={0}
            max={max}
            now={ammount}
          />
        )}
        <Stack direction="horizontal" gap={2} className="mt-2">
          <Button
            variant="outline-primary"
            className="ms-auto"
            onClick={openAddExpenseClick}
          >
            Add Expense
          </Button>
          <Button variant="outline-secondary"> View Expense</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}

function getProgressBarVariant(ammount, max) {
  const ratio = ammount / max;
  if (ratio < 0.5) return "primary";
  if (ratio < 0.75) return "warning";
  return "danger";
}
export default BudgetCard;
