import React from 'react';
import {connect} from 'react-redux'

import ToggleButton from '../SideDrawer/Toggle'
import './toolbar.css'

const mapStateToProps = state => {
    return {
        shoppingCart: state.shoppingCart.totalItems
    }
}

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <ToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/">The Greenhouse</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Products</a></li>
                    <li><a href="/">Cart({props.shoppingCart})</a></li>

                </ul>
            </div>
        </nav>
    </header>
);

export default connect(mapStateToProps)(toolbar)