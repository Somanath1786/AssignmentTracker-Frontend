import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'

// Redux and store
import { connect } from 'react-redux'
import { setUserInfo } from '../store/store'
// Helpers
import * as auth from '../api/auth'
import * as token from '../helpers/local-storage'

// Components
import Header from '../components/shared/Header'
import Navigation from '../components/shared/Navigation/Navigation'
import LoginForm from '../components/auth/Login.Form'
import SignupForm from './auth/Signup.Form';
import StudentContainer from './users/studentContainer';
import AdminContainer from './users/adminContainer';



class HomePage extends React.Component {
  constructor() {
    super()
    this.state = {
      loading : true
    }

    this.loginUser = this.loginUser.bind(this)
    this.signupUser = this.signupUser.bind(this)
    this.logoutUser = this.logoutUser.bind(this)
  }

  async componentDidMount() {
    this.setState({ loading : false })
  }

  async loginUser (user) {
    const response = await auth.login(user)
    if (response.status === 401)
    {
      this.props.dispatch({type : 'UNAUTHORIZED_ACCESS'})
    }
    else
    {
      const profile = await auth.profile()
      if (profile.status === 200)
      {
          this.props.dispatch(setUserInfo(profile.user))
      }
    }
  }

  async signupUser (user) {
    const response = await auth.signup(user)
    if (response.status === 400)
    {
        this.props.dispatch({type : 'EXISTING_EMAIL'})
    }
    else
    {
      const profile = await auth.profile()
      if (profile.status === 200)
      {
          this.props.dispatch(setUserInfo(profile.user))
      }
    }
  }

  logoutUser() {
    token.clearToken()
    this.props.dispatch({type : 'LOG_OUT'})
  }

  render() {
    if (this.state.loading)
    {
        return (<p> Loading... </p>)
    }
    return (
      <Router>
        <Header />
        <Navigation logoutUser = {this.logoutUser}/>
        <Switch>
          <Route path='/login' exact component={() => {
            return this.props.currentUserId ? <Redirect to={`/users/${this.props.currentUserId}/assignemnts`}/> : <LoginForm onSubmit={this.loginUser} />
            }}/>
          <Route path='/signup' exact component={() => {
            return this.props.currentUserId ? <Redirect to='/users'/> : <SignupForm onSubmit={this.signupUser} />
            }}/>
          <Route path='/users' render= {() => {
            return this.props.currentUserId ?
              (this.props.isAdmin ? <AdminContainer /> : <StudentContainer />) : <Redirect to='/login'/>
          }} />
          <Redirect to='/login' />
        </Switch>
      </Router>
    )
  }
}

// Connect the redux store to react
function mapStateToProps(state) {
  return {
    currentUserId : state.currentUserId,
    isAdmin : state.isAdmin
  };
}

export default connect(
  mapStateToProps,
  null
)(HomePage);
