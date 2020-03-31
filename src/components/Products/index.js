import React from 'react'
import { Table, Button } from "react-bootstrap"
import { connect } from 'react-redux'
import { If } from '../If/If'

const mapStateToProps = state => {
    return {
        products: state.products,
        activeCategory: state.categories.activeCategory
    }
}

const Products = props => {
    return (
        <section className="Products">
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Inventory</th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.products.map(product => (
                        <tr key={product.name}>
                            <If condition={product.category === props.activeCategory}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.inventory}</td>
                                <td><Button>Add to Cart</Button></td>
                            </If>
                            <If condition={!props.activeCategory}>
                                <td>{product.name}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.inventory}</td>
                                <td><Button>Add to Cart</Button></td>
                            </If>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </section>
    )

}




export default connect(mapStateToProps)(Products)