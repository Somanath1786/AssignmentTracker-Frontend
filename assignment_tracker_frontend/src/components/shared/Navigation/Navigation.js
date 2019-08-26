import React from 'react'
import UnauthenticatedLinks from './Navigation.UnauthenticatedLinks'
import AuthenticatedLinks from './Navigation.AuthenticatedLinks'
import { connect } from 'react-redux'

const navBarStyle={
    backgroundColor: 'grey',
    margin : 0,
    minHeight : '30px'
}

const Navigation = (props) => {
  return(
  <div style={navBarStyle}>
    {
      (props.currentUserId != null) ? <AuthenticatedLinks logoutUser = {props.logoutUser}/> : <UnauthenticatedLinks/>
    }
  </div>
  )
}

// Connect the redux store to react
function mapStateToProps(state) {
  return {
    currentUserId : state.currentUserId
  };
}

export default connect(
mapStateToProps,
null
)(Navigation);