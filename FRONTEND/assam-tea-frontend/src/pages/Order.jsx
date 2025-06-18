import HeroOrder from '../components/HeroOrder';
import BulkOrder from '../components/BulkOrder';



import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Order = () => {
  const location = useLocation();
  const [form, setForm] = useState({
    productType: "",
    quantity: "",
    name: "",
    email: "",
  });

  useEffect(() => {
    if (location.state) {
      setForm((prev) => ({
        ...prev,
        ...location.state,
      }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting order:", form);
    // TODO: Connect this to backend API
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
      <input name="productType" value={form.productType} readOnly />
      <input name="quantity" value={form.quantity} readOnly />
      <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" />
      <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" />
      <button type="submit">Submit Order</button>
    </form>
  );
};

export default Order;






const Order = () => {
  return (
    <>
      <HeroOrder/>
      <BulkOrder />
    </>
  );
};

export default Order;
