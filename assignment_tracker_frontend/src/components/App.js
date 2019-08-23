import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import store from '../store/store'
import {Provider} from 'react-redux'

import Header from '../shared/Header';
import Navigation from '../shared/Navigation/Navigation'
import LoginForm from '../components/auth/Login.Form'
import SignupForm from './auth/Signup.Form';



class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading : true
    }
  }

  async componentDidMount()
  {
    this.setState({ loading : false})
  }

  render() {
    if (this.state.loading)
    {
        return (<p> Loading... </p>)
    }

    return (
      <Provider store ={store}>
      <Router>
        <Header />
        <Navigation />
        <Switch>
          <Route path='/login' exact component={() => { return <LoginForm />}}/>
          <Route path='/signup' exact component={() => { return <SignupForm />}}/>
          <Redirect to='/login' />
        </Switch>
      </Router>
      </Provider>
    )

  }
}

export default App;
