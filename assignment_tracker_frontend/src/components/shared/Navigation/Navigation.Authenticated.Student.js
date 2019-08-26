import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'

const linkStyle = {
    marginTop : '2px',
    marginRight : '20px',
    color : 'linen'
}

const AuthenticatedStudent = ({logoutUser, history, currentUserId}) => {
return(
    <div>
        <Link className='nav-item' to={`/users/${currentUserId}/assignemnts`} style={linkStyle}>Home</Link>
        <Link className='nav-item' to='/users/students' style={linkStyle}>All Students</Link>
        <Link className='nav-item' to={`/users/${currentUserId}/assignemnts/new`} style={linkStyle}>Create New Assignment</Link>
        <Link onClick={logoutUser} to={'/login'} style={linkStyle}>Logout</Link>
    </div>
)
}

const studentWithRouter = withRouter(AuthenticatedStudent)

// Connect the redux store to react
function mapStateToProps(state) {
    return {
      currentUserId : state.currentUserId
    };
}

export default connect(
mapStateToProps,
null
)(studentWithRouter);