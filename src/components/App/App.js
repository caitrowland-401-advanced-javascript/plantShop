import React from 'react';
import './App.scss';
import Categories from '../Categories';
import Products from '../Products'
import { Container } from 'react-bootstrap';
import { Provider } from 'react-redux'
import store from '../../store'

function App() {

  return (

    <Provider store={store}>
      <Container className="App">
        <h1>Welcome to the pot shop</h1>
        <Categories />
        <Products />
      </Container>
    </Provider>
  )
}

export default App;
