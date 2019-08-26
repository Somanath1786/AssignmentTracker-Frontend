import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

const linkStyle = {
    marginTop : '2px',
    marginRight : '20px',
    color : 'linen'
}

const AuthenticatedAdmin = ({logoutUser, history}) => {
    return(
    <div>
        <Link className='nav-item' style={linkStyle}>All Students</Link>
        <Link className='nav-item' style={linkStyle}>Ungraded Assignments</Link>
        <Link className='nav-item' style={linkStyle}>Graded Assignments</Link>
        <Link onClick={logoutUser} to={'/login'} style={linkStyle}>Logout</Link>
    </div>
    )
}

export default withRouter(AuthenticatedAdmin)