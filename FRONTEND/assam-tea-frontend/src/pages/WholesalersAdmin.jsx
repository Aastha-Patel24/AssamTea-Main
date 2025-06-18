import React, { useContext, useState } from "react";
import { OrderContext } from "../contexts/OrderContext"; // make sure this exists
import { useNavigate } from "react-router-dom";

const WholesalersAdmin = () => {
  const { orders, updateStatus, deleteOrder } = useContext(OrderContext);
  const [expandedOrders, setExpandedOrders] = useState([]);
  const navigate = useNavigate();

  const handleToggleExpand = (orderId) => {
    setExpandedOrders((prevExpanded) =>
      prevExpanded.includes(orderId)
        ? prevExpanded.filter((id) => id !== orderId)
        : [...prevExpanded, orderId]
    );
  };

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
      <h1>Wholesale Orders</h1>

      <button
        onClick={handleOrderNow}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          backgroundColor: "#2e7d32",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Order Now
      </button>

      {orders.length === 0 ? (
        <p>No wholesale orders yet.</p>
      ) : (
        <div>
          {orders.map((order) => (
            <div
              key={order._id}
              style={{
                border: "1px solid #ccc",
                padding: "15px",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <strong>{order.customerName}</strong>
                <button onClick={() => handleToggleExpand(order._id)}>
                  {expandedOrders.includes(order._id) ? "Collapse" : "Expand"}
                </button>
              </div>

              {expandedOrders.includes(order._id) && (
                <div style={{ marginTop: "10px" }}>
                  <p>Email: {order.email}</p>
                  <p>Product: {order.productType}</p>
                  <p>Quantity: {order.quantity}</p>
                  <p>Status: {order.status}</p>

                  <button
                    onClick={() => updateStatus(order._id, "Completed")}
                    style={{ marginRight: "10px" }}
                  >
                    Mark as Completed
                  </button>
                  <button onClick={() => deleteOrder(order._id)}>Delete</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WholesalersAdmin;
