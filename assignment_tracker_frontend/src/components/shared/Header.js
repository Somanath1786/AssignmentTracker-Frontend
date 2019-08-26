import React from 'react'

const headerStyle = {
  backgroundColor : 'darkgray',
  minHeight : '100px',
  position : 'relative'
}

const textStyle = {
  marginLeft : '7%',
  marginTop : '0%',
  marginBottom : '0%',
  position : 'absolute',
  top : '30%'
}

const Header = () => (
  <header className='jumbotron jumbotron-fluid bg-light text-dark border-bottom mb-0' style = {headerStyle}>
    <div className='container'>
      <h1 className='display-4' style={textStyle}>Assignment Tracker</h1>
    </div>
  </header>
)

export default Header
