import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Shop from "./components/Shop"
import Cart from "./components/Cart"
import Navbar from "./components/Navbar"
import Watch1 from './assets/watch1.webp'
import Watch2 from './assets/watch2.jpg'
import Watch3 from './assets/watch3.jpg'
import Watch4 from './assets/omegablack.jpg'
import Watch5 from './assets/patek.webp'
import Watch6 from './assets/rolexbluedial.webp'
import Watch7 from './assets/rolexgold.jpg'
import Watch8 from './assets/seikopanda.webp'
import Watch9 from './assets/seikosarb033.jpg'
import React, { useState, useEffect } from 'react'

function App() {
  
  const [products] = useState([
    { product: 'SNXS Blue dial', price: 354, image: Watch1, brand: 'Seiko'},
    { product: 'SNXS Black dial', price: 356, image: Watch2, brand: 'Seiko'},
    { product: 'SNXS Beige dial', price: 350, image: Watch3, brand: 'Seiko' },
    { product: 'Seamaster Aqua Terra Black dial', price: 6000, image: Watch4, brand: 'Omega' },
    { product: 'Nautilus Gray dial', price: 45700, image: Watch5, brand: 'Patek Philippe' },
    { product: 'Datejust Blue dial', price: 8500, image: Watch6, brand: 'Rolex' },
    { product: 'Daytona Gold Green dial', price: 44000, image: Watch7, brand: 'Rolex' },
    { product: 'Panda', price: 850, image: Watch8, brand: 'Seiko' },
    { product: 'SARB033', price: 1000, image: Watch9, brand: 'Seiko' }
]);

  const [orders, setOrders] = useState([]);

  function addToCart(newProduct) {
    setOrders((o) => {
        // Check if the product already exists in the orders array
        const exists = o.some((order) => order.product === newProduct.product);
        
        // If it doesn't exist, add it to the array; otherwise, return the original array
        return exists ? o : [...o, { ...newProduct, quantity: 1 }];
    });
}




  useEffect(() => {
      console.log(orders);
  }, [orders]);

  function calculateTotal() {
    return orders.reduce((acc, order) => acc + order.price * order.quantity, 0);
  }

  const grandTotal = calculateTotal() < 5 ? 0 : calculateTotal() + 5;

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/shop" element={<Shop prods={products} addCart={addToCart}/>}></Route>
          <Route exact path="/cart" element={<Cart orders={orders} setOrders={setOrders} total={calculateTotal()} grandTotal={grandTotal}/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
