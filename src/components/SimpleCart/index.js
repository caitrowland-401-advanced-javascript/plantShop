import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { connect } from 'react-redux'
import './simplecart.scss'

import { removeFromCart } from '../../Actions/index'


const mapStateToProps = state => {
    return {
        shoppingCart: state.shoppingCart.products
    }
}

const mapDispatchToProps = { removeFromCart }

const SimpleCart = (props, {shoppingCart, removeFromCart}) => {

    let cartClasses = ['cartSide-drawer']
    if (props.showCart) {
        cartClasses = ['cartSide-drawer', 'open']
    }

    return (
        <section className={cartClasses.join(' ')} >
            <h2> Your cart: </h2>
            <Table>
            <tbody>
                {props.shoppingCart.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>${product.price}</td>
                        {/* <td><Button onClick={() => removeFromCart({ product }) }>Remove</Button></td> */}
                    </tr>
                ))}
            </tbody>
            </Table>
        </section>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart)