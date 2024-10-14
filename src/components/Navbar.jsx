import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Menu from '../assets/menu.png';
import Time from '../assets/time.png'

function Navbar() {

    const[openMenu, setOpenMenu] = useState(false);

    const handleMenuClick = () =>{
        setOpenMenu(!openMenu);
    }

  return (
    <div className='navbar'>
        <div className='logo'>
            <img src={Time}/>
            <h1>Chrono</h1>
        </div>
        <div className='menu'>
            <img src={Menu} alt="Menu Icon" onClick={handleMenuClick} />
        </div>
        <div className={`menuBar ${openMenu ? '' : 'closed'}`}>
            <div>
                <button  className='closeMenu' onClick={handleMenuClick} >x</button>
            </div>
            <div className='menuLinks'>
                    <Link to="/">Home</Link>
                    <Link to="/shop">Shop</Link>
                    <Link to="/cart">Cart</Link>
            </div>
        </div>
        <ul className='navlinks'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/cart"><i className="fas fa-cart-shopping"></i></Link></li>
        </ul>
    </div>
  )
}

export default Navbar