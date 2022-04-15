import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "Grocery", amount: 39.07, date: new Date(2022, 3, 11) },
    { title: "Coffee", amount: 10.47, date: new Date(2022, 3, 13) },
    { title: "Restaurant", amount: 25.05, date: new Date(2022, 3, 14) },
    { title: "Boba", amount: 15.05, date: new Date(2022, 3, 15) },
  ];

  return (
    <div className="App">
      <h2>Let's get started !</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </div>
  );
}

export default App;
