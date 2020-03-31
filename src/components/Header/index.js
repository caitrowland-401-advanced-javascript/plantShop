import React from 'react'
import { connect } from 'react-redux'


const mapStateToProps = state => {
    return {
        shoppingCart: state.shoppingCart.totalItems
    }
}

const Header = (props) => {
    return (
        <>
            <h1>Welcome to the Greenhouse</h1>
            <p>you have {props.shoppingCart} items in your cart</p>

        </>

    )

}

export default connect(mapStateToProps)(Header)