import React, { useEffect } from 'react'
import { Table, Button } from "react-bootstrap"
import { connect } from 'react-redux'
import './products.scss'
import { getAllProducts, addToCart } from '../../Actions'

const mapStateToProps = state => {
    return {

        // shoppingCart: state.shoppingCart.totalItems,

        products:
            state.activeCategory === ''
            ? state.products
            : state.products.filter(product => product.category === state.activeCategory)
    }
}


const mapDispatchToProps = { getAllProducts, addToCart }

const Products = ({ products, getAllProducts, addToCart }) => {

const productFetcher = function () {
    getAllProducts()
}

// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => productFetcher(), [])


return (
    <section className="Products">
        <Table className ="product_table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>In Stock</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>${product.price}</td>
                        <td>{product.inventory} items</td>
                        <td><Button onClick={() => addToCart({ product })} className={product.inventory > 0 ? 'show' : 'outOfStock'}>Add to Cart</Button></td>

                    </tr>
                ))}
            </tbody>
        </Table>
    </section>
)
}




export default connect(mapStateToProps, mapDispatchToProps)(Products)