import React, { useContext, useState } from 'react';
import './WholesalersAdmin.css';
import { OrderContext } from '../context/OrderContext';






import { useNavigate } from "react-router-dom";

const WholesalersAdmin = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/order", {
      state: {
        productType: "Bulk Assam Tea",
        quantity: "10kg",
      },
    });
  };

  return (
    <div className="wholesalers-admin">
      <h1>Wholesale Assam Tea Orders</h1>
      {/* Your existing content */}
      
      <button onClick={handleOrderNow} style={{ padding: "10px 20px", marginTop: "20px" }}>
        Order Now
      </button>
    </div>
  );
};

export default WholesalersAdmin;








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
                  <p><strong>Business Name:</strong> {order.business}</p>
                  <p><strong>Email:</strong> {order.email}</p>
                  <p><strong>Phone:</strong> {order.phone}</p>
                  <p><strong>Product:</strong> {order.product}</p>
                  <p><strong>Quantity:</strong> {order.quantity}</p>
                  <p><strong>Location:</strong> {order.location}</p>
                  <p><strong>Message:</strong> {order.message}</p>
                  <p><strong>Status:</strong> <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span></p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WholesalersAdmin;
