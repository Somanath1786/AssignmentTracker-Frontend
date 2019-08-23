import React from 'react'
import { Link } from 'react-router-dom'

const navBarStyle = {
    display : 'flex',
    flexdirection : 'row',
    marginLeft : '5%',
    marginRight : '5%',
    postion : 'relative'
}

const linkStyle = {
    marginTop : '2px',
    marginRight : '20px',
    color : 'linen'
}

export default () => (
<div style= {navBarStyle}>
    <Link className='nav-item' to='/signup' style={linkStyle}>Signup</Link>
    <Link className='nav-item' to='/login' style={linkStyle}>Login</Link>
</div>
)
