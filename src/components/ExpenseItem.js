import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>April 14th 2022</div>
      <div className="expense-item__description">
        <h2>Grocery</h2>
        <div className="expense-item__price">$39.07</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
