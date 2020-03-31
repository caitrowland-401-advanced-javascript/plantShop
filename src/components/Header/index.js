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
        <div>
                you have {props.shoppingCart} items in your cart
        </div>
            </>

    )

}

export default connect (mapStateToProps)(Header)