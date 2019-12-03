import React from 'react'
import { Route } from 'react-router'
import uuid from 'uuid/v1'

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => <route.component {...props} routes={route.routes} />}
  />
)

function Routes({ routes }) {
  return routes.map(route => <RouteWithSubRoutes key={uuid()} {...route} />)
}

export default Routes
