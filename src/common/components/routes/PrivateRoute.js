import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { string, shape, func } from 'prop-types'

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  return (
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

        if (roles && roles.indexOf(user.role) === -1) {
          return <Redirect to={{ pathname: '/403' }} />
        }
        return <Component {...props} />
      }}
    />
  )
}
PrivateRoute.propTypes = {
  user: Object.isRequired,
  setUser: func.isRequired,
  component: func.isRequired,
  location: shape({
    pathname: string.isRequired,
  }),
  roles: string,
}

PrivateRoute.defaultProps = {
  location: {
    pathname: '',
  },
  roles: '',
}

export default PrivateRoute
