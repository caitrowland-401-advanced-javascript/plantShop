import React, { useEffect } from 'react'
import { Nav } from "react-bootstrap"
import { connect } from 'react-redux'
import { getAllCategories, setActive } from '../../Actions'
import './categories.scss'


const mapStateToProps = state => {
    return {
        categories: state.categories.categories,
        activeCategory: state.activeCategory
    }
}

const mapDispatchToProps = { getAllCategories, setActive }

const Categories = ({ categories, activeCategory, getAllCategories, setActive }) => {
    
    const categoriesFetcher = function () {
        getAllCategories()
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => categoriesFetcher(), [])

    return (
        <Nav 
        className="Categories"
        >
            {categories.map(category => {
                return (
                    <Nav.Item onClick={() => { setActive(activeCategory === category.name ? '' : category.name) }}>
                            <Nav.Link className={category.name === activeCategory ? 'active' : 'inactive'}>
                                {category.displayName}
                        </Nav.Link>
                    </Nav.Item>
                )
            })}
        </Nav>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories)