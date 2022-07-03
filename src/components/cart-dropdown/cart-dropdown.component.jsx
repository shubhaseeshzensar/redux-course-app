import './cart-dropdown.styles.scss';
import React from 'react';
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';
import { useNavigate } from 'react-router';
import {selectCartItems, selectIsCartOpen} from '../../store/cart/cart.selector'
import { useSelector } from 'react-redux/es/exports';




const CartDropdown = () => {
    
    const cartItems = useSelector(selectCartItems)
   
    const navigate = useNavigate()
    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }
    
    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
            {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
            </div>
            <Button onClick={goToCheckoutHandler}>Checkout</Button>
        </div>
    );
};

export default CartDropdown;