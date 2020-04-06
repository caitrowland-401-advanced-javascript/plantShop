import React from 'react';
import './App.scss';
import Header from '../Header'
import Categories from '../Categories';
import Products from '../Products'
import SimpleCart from '../SimpleCart'
import { Row, Col } from 'react-bootstrap'

import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux'
import store from '../../store'


function App() {

  return (

    <Provider store={store}>
      <Container className="App">
          <Header />
          <Categories />
        <Row>
          <Col sm={10}>
            <Products />
          </Col>
          <Col sm={2}>
            <SimpleCart />
          </Col>
        </Row>
      </Container>
    </Provider>
  )
}

export default App;
