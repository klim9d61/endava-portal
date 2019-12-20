import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from './dashboard'
import Users from './users'
import Events from './events'

const Admin = () => {
  return (
    <Switch>
      <Route path="/admin/users" component={Users} />
      <Route path="/admin/events" component={Events} />
      <Route path="/admin" component={Dashboard} />
    </Switch>
  )
}

export default Admin
