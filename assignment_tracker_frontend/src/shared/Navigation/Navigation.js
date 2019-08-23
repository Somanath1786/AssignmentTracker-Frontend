import React from 'react'
import UnauthenticatedLinks from './Navigation.UnauthenticatedLinks'

const navBarStyle={
    backgroundColor: 'grey',
    margin : 0,
    minHeight : '30px'
}

export default () => (
  <div style={navBarStyle}>
        <UnauthenticatedLinks />
  </div>
)