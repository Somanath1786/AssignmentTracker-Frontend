import React from 'react'

// // Redux and store
import store from '../store/store'
import {Provider} from 'react-redux'
import HomePage from './HomePage';

class App extends React.Component {
  render() {
    return(
      <Provider store = {store} >
        <HomePage />
      </Provider>
    )
  }
}

export default App