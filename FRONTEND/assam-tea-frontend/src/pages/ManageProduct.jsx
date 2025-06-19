import React from 'react';
import { Link } from 'react-router-dom';
import './ManageProduct.css';

const ManageProduct = () => {
  return (
    <div className="manage-products">
      <h2>Manage Products</h2>

      <Link to="/products">
        <button className="back-to-products">🛒 View Shop</button>
      </Link>

      {/* List of Products for admin to manage */}
      {/* Add/Edit/Delete logic here */}
    </div>
  );
};

export default ManageProduct;
