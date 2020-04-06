import React from 'react';

import './SideDrawer.css'

const sideDrawer = props => {
    let drawerClasses = ['side-drawer']
    if (props.show) {
        drawerClasses = ['side-drawer', 'open']
    }
    return (

    <nav className={drawerClasses.join(' ')}>
        <ul>
            <li><a href="/">Products</a></li>
            {/* <li><a href="/">Cart</a></li> */}

        </ul>
    </nav>
    )
};

export default sideDrawer

///if we added the categories to the side bar 

// const SideDrawer = (props, { categories, activeCategory, getAllCategories, setActive }) => {
//     let drawerClasses = ['side-drawer']
//     if (props.show) {
//         drawerClasses = ['side-drawer', 'open']
//     }

//     const categoriesFetcher = function () {
//         props.getAllCategories()
//     }
//     useEffect(() => categoriesFetcher(), [])

//     return (
//         <section className="Categories">
//             <ul>
//                 {props.categories.map(category => {
//                     return (
//                         <li key={category.name} className={drawerClasses.join(' ')}
//                             onClick={() => { props.setActive(activeCategory === category.name ? '' : category.name) }}>
//                             {category.displayName}
//                         </li>
//                     )
//                 })}
//             </ul >
//         </section>
//     )
// };