import './App.css';
import Expenses from './components/Expenses';
import NewExpense from './components/NewExpense';
import { useState } from 'react';

function App() {
  const [allExpenses, setAllExpenses] = useState(
    [{ product: 'House Rent', amount: 10000 },
    { product: 'Groceries', amount: 4000 },
    { product: 'Gym', amount: 2000 }]
  )
  const [product, setProduct] = useState('')
  const [amount, setAmount] = useState(0)

  const onExpenseSubmit = () => {
    setAllExpenses([...allExpenses, { product: product, amount: amount }])
    setProduct('')
    setAmount('')
  }

  const productChange = (e) => {
    setProduct(e.target.value)
  }
  const amountChange = (e) => {
    setAmount(e.target.value)
  }
  return (
    <div className="App">
      <Expenses expenseList={allExpenses} /> <br/>

      <NewExpense onSubmit={onExpenseSubmit}
       productHandler={productChange}
        amountHandler={amountChange}
        product={product}
        amount={amount} />
    </div>
  );
}

export default App;
