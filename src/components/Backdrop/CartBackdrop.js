import React from 'react'

import './CartBackdrop.css'

const cartBackdrop = props => (
    <div className="cart_backdrop" onClick={props.cartClick} />
);

export default cartBackdrop