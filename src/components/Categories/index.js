import React from 'react'
import { Table, Button } from "react-bootstrap"
import { connect } from 'react-redux'
import { setActive, reset} from '../../store/activeCategory'


const mapStateToProps = state => {
    return {activeCategory : state.activeCategory }
}

const Categories = props => {
    return(
        <section className="Categories">
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>View Products</th>
                    </tr>
                </thead>
                <tbody>
                    {props.activeCategory.categories.map(category => (
                        <tr key={category.name}>
                        <td>{category.displayName}</td>
                        <td>{category.description}</td>
                        <td><Button variant='outline-primary' onClick={()=>{props.setActive(category.name)}}>View Products</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </section>
    )

}



const mapDispatchToProps = {setActive, reset}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)