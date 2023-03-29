import React from 'react';

const Cart = ({cart, handleCart}) => {
    let message;
    if(cart.length === 0){
        message = 'Cart is Empty 😥 Please Add 🙏'
    }
    return (
        <div>
            <h2>Order Summary</h2>
            <p>Total products: {cart.length}</p>
           <div>
            {
                cart.map(ts => <div><span style={{fontWeight: 'bold'}}>{ts.name}</span> <button onClick={() =>handleCart(ts)} style={{color: 'red'}}>X</button></div>)
            }
           </div>
           <p style={{color: 'tomato'}}>{message}</p>
            <p>{cart.length === 2 && "Two Items added 🥰"}</p>
        </div>
    );
};

export default Cart;