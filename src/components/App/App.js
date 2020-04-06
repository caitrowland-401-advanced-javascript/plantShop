import React, { Component } from 'react';
import './App.scss';
import Categories from '../Categories';
import Products from '../Products'
import SimpleCart from '../SimpleCart'
import { Row, Col } from 'react-bootstrap'
import Toolbar from '../Toolbar'
import SideDrawer from '../SideDrawer/SideDrawer'
import CartBackdrop from '../Backdrop/CartBackdrop'
import Backdrop from '../Backdrop/Backdrop'
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux'
import store from '../../store'
// import cartBackdrop from '../Backdrop/CartBackdrop';



class App extends Component {

  state = {
    sideDrawerOpen: false,
    cartDrawerOpen: false
  }

  ///Menu toggler 
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  //Cart Toggler
  cartToggleClickHandler = () => {
    this.setState((prevState) => {
      return {cartDrawerOpen: !prevState.cartDrawerOpen}
    })
  }


  cartBackdropClickHandler = () => {
    this.setState({ cartDrawerOpen: false })
  }

  render() {

    //Menu backdrop
    let backdrop;
    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    //cart backdrop

    let cartBackdrop;
    if (this.state.cartDrawerOpen) {
      cartBackdrop = <CartBackdrop cartClick={this.cartBackdropClickHandler} />
    }
    return (
      <Provider store={store}>
        <Container className="App">
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} cartClickHandler={this.cartToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
          <SimpleCart showCart={this.state.cartDrawerOpen} />
          {cartBackdrop}
          <Categories />
          {/* <Row> */}
          {/* <Col sm={10}> */}
          <Products />
          {/* </Col> */}
          {/* <Col sm={2}>
              <SimpleCart />
            </Col> */}
          {/* </Row> */}
        </Container>
        </Provider>
    )
  }

}

export default App;
