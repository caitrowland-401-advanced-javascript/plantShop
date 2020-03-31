import React from 'react';
import './App.scss';
import Header from '../Header'
import Categories from '../Categories';
import Products from '../Products'
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux'
import store from '../../store'

function App() {

  return (

    <Provider store={store}>
      <Container className="App">
        <Header />
        <Categories />
        <Products />
      </Container>
    </Provider>
  )
}

export default App;
