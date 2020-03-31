import React from 'react'
import { connect } from 'react-redux'


const mapStateToProps = state => {
    return {
        shoppingCart: state.shoppingCart.totalItems
    }
}

const Header = (props) => {
    return (
        <section class="header">
            <h1>Welcome to the Greenhouse</h1>
            <p>{props.shoppingCart} items cart</p>
        </section>

    )

}

export default connect(mapStateToProps)(Header)