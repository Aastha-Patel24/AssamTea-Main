import React, { useContext, useState } from 'react';
import './WholesalersAdmin.css';
import { OrderContext } from '../context/OrderContext';

const WholesalersAdmin = () => {
  const { orders, updateStatus, deleteOrder } = useContext(OrderContext);
  const [expandedOrders, setExpandedOrders] = useState([]);

  const toggleExpand = (id) => {
    setExpandedOrders((prev) =>
      prev.includes(id) ? prev.filter((oid) => oid !== id) : [...prev, id]
    );
  };

  return (
    <div className="wholesalers-admin">
      <h1>Bulk Order Requests</h1>
      <div className="order-list">
        {orders.map((order) => {
          const isExpanded = expandedOrders.includes(order.id);

          return (
            <div className="order-card" key={order.id}>
              <div className="order-header">
                <p><strong>Full Name:</strong> {order.name}</p>
                <div className="button-group">
                  <button onClick={() => updateStatus(order.id, "Accepted")} className="accept-btn">Accept</button>
                  <button onClick={() => deleteOrder(order.id)} className="reject-btn">Reject</button>
                  <button onClick={() => toggleExpand(order.id)} className="readmore-btn">
                    {isExpanded ? "Show Less" : "Read More"}
                  </button>
                </div>
              </div>

              {isExpanded && (
                <div className="order-details">
                  <p><strong>Business Name:</strong> {order.businessName}</p>
