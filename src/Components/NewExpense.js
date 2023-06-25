import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
  const saveProductDataHandler = (enteredProductData) => {
    const productData = {
      ...enteredProductData,
      id: Math.random().toString(),
    };
    props.onAddProduct(productData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveProductData={saveProductDataHandler} />
    </div>
  );
};

export default NewExpense;