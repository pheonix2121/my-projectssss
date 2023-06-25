import React, { useState, useEffect } from 'react';
import './App.css';
import NewExpense from './Components/NewExpense';
import ExpenseList from './Components/ExpenseList';

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('products'));

    if (storedProducts && storedProducts.length > 0) {
      setProducts(storedProducts);
    }
  }, []);

  const addProductHandler = (product) => {
    const updatedProducts = [product, ...products];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  const deleteProductHandler = (expenseId) => {
    const updatedProducts = products.filter((product) => product.id !== expenseId);
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
  };

  return (
    <div>
      <NewExpense onAddProduct={addProductHandler} />
      <ExpenseList products={products} onDeleteProduct={deleteProductHandler} />
    </div>
  );
};

export default App;
