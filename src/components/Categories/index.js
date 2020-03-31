import React from 'react'
import { Nav } from "react-bootstrap"
import { connect } from 'react-redux'
import { setActive } from '../../Actions/categoryActions'
import { If } from '../If/If'
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
                    <Nav.Item onClick={() => { props.setActive(category.name) }}>
                        <If condition={category.name === props.activeCategory}>
                            <Nav.Link className="active">
                                {category.displayName}
                            </Nav.Link>

                        </If>
                        <If condition={category.name !== props.activeCategory}>
                            <Nav.Link className="inactive">{category.displayName}</Nav.Link>
                        </If> 
                    </Nav.Item>
                )
            })}
        </Nav>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)