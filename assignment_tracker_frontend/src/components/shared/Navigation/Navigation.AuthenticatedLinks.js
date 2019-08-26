import React from 'react'
import { connect } from 'react-redux'

// Components
import AuthenticatedStudent from './Navigation.Authenticated.Student'
import AuthenticatedAdmin from './Navigation.Authenticated.Admin'

const navBarStyle = {
    display : 'flex',
    flexdirection : 'row',
    marginLeft : '5%',
    marginRight : '5%',
    postion : 'relative'
}

const Navigation_Authenticated = (props) => (
<div style= {navBarStyle}>
    {props.isAdmin ? <AuthenticatedAdmin logoutUser = {props.logoutUser}/> : <AuthenticatedStudent logoutUser = {props.logoutUser}/>}
</div>
)

// Connect the redux store to react
function mapStateToProps(state) {
    return {
      isAdmin : state.isAdmin
    };
}

export default connect(
mapStateToProps,
null
)(Navigation_Authenticated);