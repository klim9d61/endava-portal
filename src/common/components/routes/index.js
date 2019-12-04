import React from 'react'
import { Route } from 'react-router'
import { node, string, arrayOf, object } from 'prop-types'

const RouteWithSubRoutes = ({ Component, path, routes }) => (
  <Route
    path={path}
    render={props => <Component {...props} routes={routes} />}
  />
)

RouteWithSubRoutes.propTypes = {
  Component: node.isRequired,
  path: string.isRequired,
  routes: arrayOf(object),
}

RouteWithSubRoutes.defaultProps = {
  routes: [],
}

export default RouteWithSubRoutes
