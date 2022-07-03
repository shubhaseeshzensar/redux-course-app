import React from 'react';
import './checkout-item.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import {addItemToCart, removeItemToCart, clearItemFromCart} from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector';


const CheckoutItem = ({ cartItem }) => {
    
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const { name, imageUrl, price, quantity } = cartItem

    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems,cartItem))
    const removeItemHandler = () => dispatch(removeItemToCart(cartItems,cartItem))
    const addItemHandler = () => dispatch(addItemToCart(cartItems,cartItem))

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>
                &#8722;
                </div>
                <span className='value'>{quantity}</span>

                <div className='arrow' onClick={addItemHandler}>
                &#43;
                </div>
            </span>
            <span className='price'><span>&#8377; </span>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
        </div>
    );
};

export default CheckoutItem;