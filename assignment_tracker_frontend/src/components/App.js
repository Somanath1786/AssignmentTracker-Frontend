import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

// Redux and store
import store from '../store/store'
import {Provider} from 'react-redux'

// Helpers
import * as auth from '../api/auth'
import * as token from '../helpers/local-storage'

// Components
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

    this.loginUser = this.loginUser.bind(this)
    this.signupUser = this.signupUser.bind(this)
  }

  async componentDidMount() {
    this.setState({ loading : false })
  }

  async loginUser (user) {
    const response = await auth.login(user)
    console.log(response)
  }

  async signupUser (user) {
    const response = await auth.signup(user)
    console.log(response)
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
          <Route path='/login' exact component={() => { return <LoginForm onSubmit={this.loginUser} />}}/>
          <Route path='/signup' exact component={() => { return <SignupForm onSubmit={this.signupUser} />}}/>
          <Redirect to='/login' />
        </Switch>
      </Router>
      </Provider>
    )
  }
}

export default App;
