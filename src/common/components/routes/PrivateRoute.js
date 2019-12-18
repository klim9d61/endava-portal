import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { shape, func, string } from 'prop-types'

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        const user = JSON.parse(localStorage.getItem('currentUser'))
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location },
              }}
            />
          )
        }
        return <Component {...props} />
      }}
    />
  )
}
PrivateRoute.propTypes = {
  component: func.isRequired,
  location: shape({
    pathname: string.isRequired,
  }),
}

PrivateRoute.defaultProps = {
  location: {
    pathname: '',
  },
}

export default PrivateRoute
