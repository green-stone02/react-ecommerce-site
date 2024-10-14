import React from 'react'
import { Link } from 'react-router-dom';

function Home() {

    

  return (
    <div className='home'>
        <div className='homeContainer'>
            <h2>Chrono</h2>
            <h1>TIME IS A LUXURY</h1>
            <p>A Classic Collection of Luxury Watches for the Real Gentlemen.</p>
            <p id='note'>Note: This is a demo website</p>
            <Link to="/shop"><button>Order Now</button></Link>
            
        </div>
    </div>
  )
}

export default Home