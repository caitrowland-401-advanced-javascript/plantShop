import React, { Component } from 'react';
import './App.scss';
import Header from '../Header'
import Categories from '../Categories';
import Products from '../Products'
import SimpleCart from '../SimpleCart'
import { Row, Col } from 'react-bootstrap'
import Toolbar from '../Toolbar'
import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../Backdrop/Backdrop'
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux'
import store from '../../store'



class App extends Component {

  state = {
    sideDrawerOpen: false
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  render() {

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <Provider store={store}>
        <Container className="App">
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
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
