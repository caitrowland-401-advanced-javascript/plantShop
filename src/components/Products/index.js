import React from 'react'
import { Table, Button } from "react-bootstrap"
import { connect } from 'react-redux'
import { filterProducts } from '../../store/products'
import { setActive, reset} from '../../store/activeCategory'
import Categories from '../Categories'
// import Products from '../Products'

// let activeCategory
const mapStateToProps = state => {
    return {productToShow : state.productToShow }
}

const Products = props => {
    return(
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
                    {props.productToShow.products.map(product => (
                        <tr key={product.name}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td>{product.inventory}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </section>
    )

}



const mapDispatchToProps = {filterProducts}

export default connect(mapStateToProps, mapDispatchToProps)(Products)