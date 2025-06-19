// Dipal Code : 

// import React, { useState, useEffect } from 'react';
// import '../components/ShoppingCart.css';
// import ProductRow from '../components/ProductRow';
// import OrderSummary from '../components/OrderSummary';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';



// import blackTeaImage from '../assets/images/black-tea-cart.png';
// import masalaTeaImage from '../assets/images/masala-tea-cart.png';
// import greenTeaImage from '../assets/images/green-tea-cart.png';

// const ShoppingCart = () => {
//   const navigate = useNavigate();
  // const [products, setProducts] = useState([
  //   {
  //     id: 1,
  //     name: 'Black Tea',
  //     weight: '1 kg pack',
  //     price: 300,
  //     image: blackTeaImage,
  //     description: 'Premium Assam Black Tea - 1kg Pack, Full-Bodied, Strong & Robust Flavor, Rich Malty Undertones.',
  //     benefits: 'Boosts energy and improves focus',
  //     stock: 'In stock',
  //     quantity: 1,
  //   },
  //   {
  //     id: 2,
  //     name: 'Masala Tea',
  //     weight: '1 kg pack',
  //     price: 500,
  //     image: masalaTeaImage,
  //     description: 'Premium Masala Tea - 1kg Pack, Richly Spiced, Aromatic Blend with Bold & Full-Bodied Flavor, Infused with Traditional Spices.',
  //     benefits: 'Warming and immune-boosting',
  //     stock: 'Only 3 left',
  //     quantity: 1,
  //   },
  //   {
  //     id: 3,
  //     name: 'Green Tea',
  //     weight: '500g pack',
  //     price: 450,
  //     image: greenTeaImage,
  //     description: 'Premium Green Tea - 500g Pack, Refreshing & Light, Naturally Rich Flavor with a Smooth, Grassy Aroma, Packed with Antioxidants.',
  //     benefits: 'Promotes metabolism and offers antioxidant benefits',
  //     stock: 'In stock',
  //     quantity: 1,
  //   }
  // ]);

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//   const fetchCart = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000/api/cart/getcart', {
//        withCredentials: true,
//       });

//         console.log("Cart response data:", res.data);  // ✅ Will now show correct data

//     const items = res.data.items || []; 

//       const fetchedProducts = res.data.items.map(item => ({
//         id: item.product._id,
//         name: item.product.name,
//         image: item.product.image, // adjust if image is nested
//         // weight: item.product.weight,
//         weight: item.size,
//         price: item.product.price,
//         quantity: item.quantity,
//         description: item.product.description || '',
//         benefits: item.product.benefits || '',
//         stock: item.product.stockStatus || 'In stock',
//       }));

//       setProducts(fetchedProducts);
//     } catch (err) {
//       console.error('Failed to fetch cart:', err);
//     }
//   };

//   fetchCart();
// }, []);


// const handleDelete = async (id, size) => {
//   try {
//     await axios.delete('http://localhost:5000/api/cart/remove', {
//       withCredentials: true,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       data: {
//         productId: id,
//         size: size,
//       },
//     });

//     setProducts(prev => prev.filter(p => !(p.id === id && p.weight === size)));

//   } catch (err) {
//     console.error("Error deleting item from cart:", err);
//   }
// };



//   const handleQuantityChange = (id, newQuantity) => {
//     setProducts(prev =>
//       prev.map(product =>
//         product.id === id ? { ...product, quantity: newQuantity } : product
//       )
//     );
//   };

//   const handleProceedToBuy = () => {
//   const totalAmount = products.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   navigate('/payment', { state: { totalAmount } });
// };


//   return (
//     <div className="shopping-cart-container">
//       <h1 className="shopping-cart-title">Shopping Cart</h1>
//       <div className="cart-content">
//         <div className="product-list">
//           <div className="product-header">
//             <span>Product</span>
//             <span></span>
//             <span>Subtotal</span>
//           </div>
//           {products.map(product => (
//             <ProductRow
//               key={product.id}
//               product={product}
//               onDelete={handleDelete}
//               onQuantityChange={handleQuantityChange}
//             />
//           ))}
//           <a href="/" className="continue-shopping">← CONTINUE SHOPPING</a>
//         </div>
//         {/* <OrderSummary products={products} />
//          */}
//         <OrderSummary 
//   products={products} 
//   // onProceed={() => {
//   //   const subtotal = products.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   //   navigate('/payment', { state: { baseAmount: subtotal } });
//   // }} 
//   onProceed={async () => {
//   try {
//     const orderItems = products.map(item => ({
//       product: item.id,
//       size: item.weight,  // or use item.size if available separately
//       quantity: item.quantity,
//     }));

//     const res = await axios.post('http://localhost:5000/api/order/place', {
//       items: orderItems
//     }, {
//       withCredentials: true
//     });

//     console.log('Order placed:', res.data);

//     // ✅ Clear cart locally after placing order
//     setProducts([]); // Optional: Clear the cart UI immediately

//     // ✅ Navigate to payment confirmation
//     navigate('/payment', { state: { baseAmount: res.data.order.totalPrice } });

//   } catch (error) {
//     console.error('Error placing order:', error);
//     alert('Failed to place order.');
//   }
// }}

// />


//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;

// ----------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------

// Harshil Code :

// import React, { useState, useContext, useEffect } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import '../components/ShoppingCart.css';
// import ProductRow from '../components/ProductRow';
// import OrderSummary from '../components/OrderSummary';

// import blackTeaImage from '../assets/images/black-tea-cart.png';
// import masalaTeaImage from '../assets/images/masala-tea-cart.png';
// import greenTeaImage from '../assets/images/green-tea-cart.png';

// const ShoppingCart = () => {
//   const [products, setProducts] = useState([
//     {
//       id: 1,
//       name: 'Black Tea',
//       weight: '1 kg pack',
//       price: 300,
//       image: blackTeaImage,
//       description:
//         'Premium Assam Black Tea - 1kg Pack, Full-Bodied, Strong & Robust Flavor, Rich Malty Undertones.',
//       benefits: 'Boosts energy and improves focus',
//       stock: 'In stock',
//       quantity: 1,
//     },
//     {
//       id: 2,
//       name: 'Masala Tea',
//       weight: '1 kg pack',
//       price: 500,
//       image: masalaTeaImage,
//       description:
//         'Premium Masala Tea - 1kg Pack, Richly Spiced, Aromatic Blend with Bold & Full-Bodied Flavor, Infused with Traditional Spices.',
//       benefits: 'Warming and immune-boosting',
//       stock: 'Only 3 left',
//       quantity: 1,
//     },
//     {
//       id: 3,
//       name: 'Green Tea',
//       weight: '500g pack',
//       price: 450,
//       image: greenTeaImage,
//       description:
//         'Premium Green Tea - 500g Pack, Refreshing & Light, Naturally Rich Flavor with a Smooth, Grassy Aroma, Packed with Antioxidants.',
//       benefits: 'Promotes metabolism and offers antioxidant benefits',
//       stock: 'In stock',
//       quantity: 1,
//     },
//   ]);

//   const { userOrders, setUserOrders } = useContext(AuthContext);

//   // Restore orders from localStorage on load (optional)
//   useEffect(() => {
//     const storedOrders = localStorage.getItem('userOrders');
//     if (storedOrders) {
//       setUserOrders(JSON.parse(storedOrders));
//     }
//   }, [setUserOrders]);

//   const handleDelete = (id) => {
//     setProducts((prev) => prev.filter((p) => p.id !== id));
//   };

//   const handleQuantityChange = (id, newQuantity) => {
//     setProducts((prev) =>
//       prev.map((product) =>
//         product.id === id ? { ...product, quantity: newQuantity } : product
//       )
//     );
//   };

//   const handleCheckout = () => {
//     if (products.length === 0) {
//       alert('Your cart is empty.');
//       return;
//     }

//     const newOrders = [...userOrders, ...products];
//     setUserOrders(newOrders);
//     localStorage.setItem('userOrders', JSON.stringify(newOrders));
//     alert('Order placed successfully!');
//     setProducts([]); // Clear cart after order
//   };

//   return (
//     <div className="shopping-cart-container">
//       <h1 className="shopping-cart-title">Shopping Cart</h1>
//       <div className="cart-content">
//         <div className="product-list">
//           <div className="product-header">
//             <span>Product</span>
//             <span></span>
//             <span>Subtotal</span>
//           </div>

//           {products.length === 0 ? (
//             <p style={{ marginTop: '20px', fontSize: '18px' }}>Your cart is empty.</p>
//           ) : (
//             <>
//               {products.map((product) => (
//                 <ProductRow
//                   key={product.id}
//                   product={product}
//                   onDelete={handleDelete}
//                   onQuantityChange={handleQuantityChange}
//                 />
//               ))}
//               <button onClick={handleCheckout} className="checkout-button">
//                 Place Order
//               </button>
//             </>
//           )}

//           <a href="/product" className="continue-shopping">
//             ← CONTINUE SHOPPING
//           </a>
//         </div>
//         <OrderSummary products={products} />
//       </div>
//     </div>
//   );
// };

// export default ShoppingCart;



import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './ProductShop.css'; // Custom styles
import { PRODUCT_API_END_POINT } from './utils/constant.js';

const ProductDisplay = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState('');

  useEffect(()=>{
    const fetchProducts = async()=>{
try {
  
  // const res = await axios.get('http://localhost:5000/api/product');
  const res = await axios.get(`${PRODUCT_API_END_POINT}`)
  setProducts(res.data.products);
  setLoading(false);

} catch (error) {
  setError('Failed to load products');
        setLoading(false);
}
    };

    fetchProducts();
  },[]);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>{error}</div>;


  return (
    <div className='main-product'>
      <div className='heading'> <h1> Our Product </h1> </div>
      <div className='product-container'>
          {products.map((product) => (

          <div className='card' key={product._id}>
            <div className='card-img'>
              <Link to={`/product/${product._id}`}>

                <img src={product.image} alt={product.name} className="product-image" />
              </Link>
            </div>
            <div className='card-detail'>
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <h1>₹{product.price}Per Kg / Pack</h1>
              {/* <Link to={`/product/${product._id}`}>

                <button id='card-btn'>Buy Now</button>
              </Link> */}

               <Link to="/product/:id" state={{ product }}>
                 <button id='card-btn'>Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className='heading'> <h1> TOP SELLING </h1> </div>

      <div className='product-container'>
          {products.map((product) => (

          <div className='card' key={product._id}>
            <div className='card-img'>
              <Link to={`/product/${product._id}`}>

                <img src={product.image} alt={product.name} className="product-image" />
              </Link>
            </div>
            <div className='card-detail'>
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <h1>₹{product.price}Per Kg / Pack</h1>
              {/* <Link to="/product" state={{ product }}> */}
               <Link to="/product/:id" state={{ product }}>
                 <button id='card-btn'>Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className='product-container'>
          {products.map((product) => (

          <div className='card' key={product._id}>
            <div className='card-img'>
             <Link to={`/product/${product._id}`}>

                <img src={product.image} alt={product.name} className="product-image" />
              </Link>
            </div>
            <div className='card-detail'>
              <h3>{product.name}</h3>
              <p>{product.description}</p>

              <h1>₹{product.price}Per Kg / Pack</h1>
               <Link to="/product/:id" state={{ product }}>
                 <button id='card-btn'>Buy Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;

