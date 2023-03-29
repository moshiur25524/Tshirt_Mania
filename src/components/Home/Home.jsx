import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css'

const Home = () => {
    const tshrits = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleBuyTshirt = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if (exists) {
            alert("You Already Added to the cart");
        }
        else {
            const newCart = [...cart, tshirt]
            setCart(newCart)
        }
    }

    const handleCart = tshirt =>{
        const remaining = cart.filter(ts => ts._id !== tshirt._id)
        setCart(remaining)
    }
    return (
        <div className='home'>
            <div className="tshirt-container">
                {
                    tshrits.map(tshirt => <Tshirt
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleBuyTshirt={handleBuyTshirt}
                    />)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    handleCart = {handleCart}
                />
            </div>
        </div>
    );
};

export default Home;