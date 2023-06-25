import React from 'react';
import './ExpenseList.css';

const ExpenseList = (props) => {
    const { products, onDeleteProduct } = props;

    const deleteProductHandler = (productId) => {
      onDeleteProduct(productId);
    };

    const categorizedProducts = products.reduce((acc, product) => {
      acc[product.category] = acc[product.category] || [];
      acc[product.category].push(product);
      return acc;
    }, {});

    return (
      <div className='expense-item'>
        {Object.entries(categorizedProducts).map(([category, products]) => (
          <div className='item' key={category}>
            <h2>{category.toUpperCase()} LIST</h2>
            {products.map((product) => (
              <div key={product.id}>
                <p> 
                    Product: {product.title} - Price: Rs. {product.amount} - Category: {product.category}
                    <button onClick={() => deleteProductHandler(product.id)}>
                  Delete</button>
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  export default ExpenseList;