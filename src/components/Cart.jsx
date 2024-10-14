import React, { useState } from 'react';
import Trash from '../assets/trash.png';

function Cart({ orders, setOrders, total, grandTotal }) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        address: '',
        payment: 'cod',
    });


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name]: value,});
    };


    const handlePlaceOrder = () => {

        if (orders.length === 0) {
            return;
        }


        setFormData({
            name: '',
            email: '',
            contact: '',
            address: '',
            payment: 'cod',
        });


        setOrders([]);

        alert(`Your order has been placed`);
    };

    const handleDelete = (index) => {
        setOrders(prevOrders => prevOrders.filter((_, i) => i !== index));
    };

    const handleQuantityChange = (index, newQuantity) => {
        setOrders(prevOrders =>
            prevOrders.map((order, i) =>
                i === index ? { ...order, quantity: newQuantity } : order
            )
        );
    };

    return (
        <div className='cartPage'>
            <div className='deliveryInfo'>
                <h2>Delivery Info</h2>
                <form>
                    <fieldset>
                        <legend>Fill in your delivery details</legend>
                        
                        <div className="form-group">
                            <label htmlFor='name'>Name:</label>
                            <input 
                                type='text' 
                                id='name' 
                                name='name' 
                                value={formData.name} 
                                onChange={handleInputChange}
                                placeholder='Enter your name' 
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor='email'>Email:</label>
                            <input 
                                type='email' 
                                id='email' 
                                name='email' 
                                value={formData.email} 
                                onChange={handleInputChange}
                                placeholder='Enter your email' 
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor='contact'>Contact:</label>
                            <input 
                                type='tel' 
                                id='contact' 
                                name='contact' 
                                value={formData.contact} 
                                onChange={handleInputChange}
                                placeholder='Enter your contact number' 
                                required 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor='address'>Address:</label>
                            <input 
                                type='text' 
                                id='address' 
                                name='address' 
                                value={formData.address} 
                                onChange={handleInputChange}
                                placeholder='Enter your address' 
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor='payment'>Payment Type:</label>
                            <select 
                                id='payment' 
                                name='payment' 
                                value={formData.payment} 
                                onChange={handleInputChange}
                                required
                            >
                                <option value='cod'>Cash on Delivery</option>
                                <option value='gcash'>Gcash</option>
                                <option value='bank'>Bank</option>
                            </select>
                        </div>
                    </fieldset>
                </form>
            </div>

            <div className='cart'>
                <h2>My Cart</h2>
                <div className='cartDisplay'>
                    {orders.length === 0 ? (
                        <p className='empty'></p>
                    ) : (
                        orders.map((order, index) => (
                            <div className='order' key={index}>
                                <h3>{order.product} - <span className='brand'>{order.brand}</span></h3>
                                <div className='delete'>
                                    <p>${order.price}</p>
                                    <div className='quantity'>
                                        <label htmlFor="numberInput">Quantity:</label>
                                        <input 
                                            type='number' 
                                            defaultValue={1}
                                            min={1} 
                                            id='numberInput' 
                                            onChange={(e) => handleQuantityChange(index, parseInt(e.target.value) || 1)}
                                        />
                                        <button onClick={() => handleDelete(index)}>
                                            <img src={Trash} className='remove' alt='Remove' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <div className='total'>
                    <h5>Items Total: ${total}</h5>
                    <h5>Shipping: $5</h5>
                    <div className='bill'>
                        <h3>Total: ${grandTotal}</h3>
                        <button onClick={handlePlaceOrder}>Place Order</button>
                    </div>                    
                </div>
            </div>
        </div>
    );
}

export default Cart;
