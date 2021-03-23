import React from 'react';
import './Checkout.css';
import Subtotal from'./Subtotal';
function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://images.pexels.com/photos/53990/biker-motorcycle-dirt-extreme-53990.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
            
                <div>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                    {/* BasketItem */}
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>

        </div>
    );
}

export default Checkout
