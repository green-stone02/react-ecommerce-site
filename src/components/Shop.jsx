import React, { useState, useEffect } from 'react'


function Shop({prods, addCart}){
    

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(prods);
    }, [prods]);


    return (
        <div className='hero'>
            <div className='productContainer'>
                {products.map((item, index) => (
                    <div className='productCard' key={index}>
                        <img src={item.image} alt={item.product} />
                        <h3>{item.brand} - {item.product}</h3>
                        <div className='addCart'>
                            <p>${item.price}</p>
                            <button onClick={()=> addCart(item)}>
                                <i className="fa-solid fa-cart-plus"></i>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop;
