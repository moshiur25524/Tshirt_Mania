import React from 'react';
import './Tshirt.css'

const Tshirt = ({tshirt, handleBuyTshirt}) => {
    const {name, picture, price} = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <p>{name}</p>
            <p>Price: {price}</p>
            <button onClick={()=>handleBuyTshirt(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;