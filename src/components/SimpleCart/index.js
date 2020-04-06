import React from 'react'
import { connect } from 'react-redux'

import './simplecart.scss'

const mapStateToProps = state => {
    return {
        shoppingCart: state.shoppingCart.products
    }
}

const SimpleCart = props => {
    return (
        <section className = "Cart">
        <h2>Your cart:</h2>
        <ul>
            {props.shoppingCart.map(product => (
                <li key={product.name}>{product.name}</li>
            ))}
            </ul>
                </section>
    )

}

export default connect(mapStateToProps)(SimpleCart)