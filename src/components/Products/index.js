import React from 'react'
import { Table, Button } from "react-bootstrap"
import { connect } from 'react-redux'
// import { If } from '../If/If'
import './products.scss'
import { addToCart } from '../../Reducers/cartReducer'
import {decrement} from '../../Reducers/productReducer'

const mapStateToProps = state => {
    return {
        products: state.products,
        shoppingCart: state.shoppingCart.totalItems
    }
}

const mapDispatchToProps = { addToCart, decrement }

const Products = props => {
    return (
        <section className="Products">
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>In Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map(product => (
                        <tr key={product.name}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>${product.price}</td>
                                <td>{product.inventory} items</td>
                                <td><Button onClick={() => props.addToCart({ product })}>Add to Cart</Button></td>

                        </tr>
                    ))}
                </tbody>
            </Table>
        </section>
    )
}




export default connect(mapStateToProps, mapDispatchToProps)(Products)