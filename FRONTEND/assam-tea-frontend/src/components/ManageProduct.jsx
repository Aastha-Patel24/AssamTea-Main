import React, { useEffect, useState } from 'react';
import './ManageProduct.css';
import { Link } from 'react-router-dom';



const ManageProduct = () => {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ id: '', name: '', price: '', description: '', image: '' });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('products')) || [];
    setProducts(stored);
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem('products', JSON.stringify(data));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setForm({ ...form, image: reader.result }); // Base64 image
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.image) {
      alert("Please select an image.");
      return;
    }

    if (isEditing) {
      const updated = products.map((p) => (p.id === form.id ? form : p));
      setProducts(updated);
      saveToLocalStorage(updated);
      setIsEditing(false);
    } else {
      const newProduct = { ...form, id: Date.now() };
      const updated = [...products, newProduct];
      setProducts(updated);
      saveToLocalStorage(updated);
    }

    setForm({ id: '', name: '', price: '', description: '', image: '' });
  };

  const handleDelete = (id) => {
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    saveToLocalStorage(updated);
  };

  const handleEdit = (product) => {
    setForm(product);
    setIsEditing(true);
  };

  return (
    <Link to="/products">
      <button className="back-to-products">🛒 Go to Product Page</button>
    </Link>

    <div className="manage-product">
      <h2>Manage Products</h2>
      <form onSubmit={handleSubmit}>
        <input placeholder="Product Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
        <input placeholder="Price (e.g., ₹ 200 Per Kg)" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} required />
        <input placeholder="Description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} required />
        
        <input type="file" accept="image/*" onChange={handleImageUpload} required={!isEditing} />
        {form.image && (
          <div style={{ marginTop: '10px' }}>
            <img src={form.image} alt="Preview" width="100" />
          </div>
        )}

        <button type="submit">{isEditing ? 'Update' : 'Add'} Product</button>
      </form>

      <div className="product-list">
        <h3>Current Products</h3>
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} width="80" />
            <div>
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <strong>{product.price}</strong>
            </div>
             <div className="product-actions">
               <button onClick={() => handleEdit(product)}>Edit</button>
               <button onClick={() => handleDelete(product.id)}>Delete</button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageProduct;
