import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { string, node, shape } from 'prop-types'

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
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
}

export default PrivateRoute
