import React, { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredProduct, setEnteredProduct] = useState('');
  const [enteredPrice, setEnteredPrice] = useState('');
  const [enteredCategory, setEnteredCategory] = useState('');

  const productInputChangeHandler = (event) => {
    setEnteredProduct(event.target.value);
  };

  const priceInputChangeHandler = (event) => {
    const amountInput = event.target.value;
    setEnteredPrice(amountInput);
  };

  const categoryInputChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredProduct,
      amount: enteredPrice,
      category: enteredCategory,
    };
    props.onSaveProductData(expenseData);
    setEnteredProduct('');
    setEnteredPrice('');
    setEnteredCategory('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__control">
        <label>Product Name</label>
        <input
          id='product'
          type="text"
          value={enteredProduct}
          onChange={productInputChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Price</label>
        <input
          id='price'
          type="number"
          min="0.01"
          max="MAX_INTEGER"
          step="0.01"
          value={enteredPrice}
          onChange={priceInputChangeHandler}
        />
      </div>
      <div className="new-expense__control">
        <label>Choose Category</label>
        <select id='category' value={enteredCategory} onChange={categoryInputChangeHandler}>
        <option value="selectOne">Select One</option>
          <option value="electronic">Electronic</option>
          <option value="food">Food</option>
          <option value="skincare">Skincare</option>
        </select>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Order</button>
      </div>
    </form>
  );
};

export default ExpenseForm;