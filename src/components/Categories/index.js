import React from 'react'
import { Nav } from "react-bootstrap"
import { connect } from 'react-redux'
import { setActive } from '../../Actions/categoryActions'
import './categories.scss'


const mapStateToProps = state => {
    return {
        categories: state.categories.categories,
        activeCategory: state.categories.activeCategory
    }
}

const mapDispatchToProps = { setActive }

const Categories = props => {
    return (
        <Nav 
        className="Categories"
        >
            {props.categories.map(category => {
                return (
                    <Nav.Item onClick={() => { props.setActive(props.activeCategory === category.name ? '' : category.name) }}>
                            <Nav.Link className={category.name === props.activeCategory ? 'active' : 'inactive'}>
                                {category.displayName}
                        </Nav.Link>
                    </Nav.Item>
                )
            })}
        </Nav>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)