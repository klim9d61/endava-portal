import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { string, node, shape, func } from 'prop-types'

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
  user: Object.isRequired,
  setUser: func.isRequired,
  component: node.isRequired,
  location: shape({
    pathname: string.isRequired,
  }).isRequired,
}

export default PrivateRoute
