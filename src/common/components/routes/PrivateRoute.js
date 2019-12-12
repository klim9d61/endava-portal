import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { node, string } from 'prop-types'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => {
      const user = JSON.parse(localStorage.getItem('currentUser'))
      if (!user) {
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
      }

      return <Component {...props} />
    }}
  />
)

PrivateRoute.propTypes = {
  component: node.isRequired,
  location: string.isRequired,
}

export default PrivateRoute
