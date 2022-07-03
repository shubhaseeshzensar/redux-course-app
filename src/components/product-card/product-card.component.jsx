import React from "react";
import Button from '../button/button.component';
import "./product-card.styles.scss";
import { addItemToCart} from '../../store/cart/cart.action'
import { useDispatch, useSelector } from "react-redux/es/exports";
import {selectCartItems} from '../../store/cart/cart.selector'

const ProductCard = ({ product }) => {  

    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItems)
    const { id, name, imageUrl, price } = product;

    const addProductToCart = () => dispatch(addItemToCart(cartItems,product))

    return (
        <div className="product-card-container">
            <img alt={`${name}`} src={imageUrl} />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType="inverted" onClick={addProductToCart}>Add To Cart</Button>
        </div>
    );
};

export default ProductCard;