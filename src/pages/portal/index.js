import React from 'react'
import { Layout } from 'antd'
import { Redirect, Route, Switch } from 'react-router'
import PrivateRoute from 'common/components/routes/PrivateRoute'

import {
  Calendar,
  RequestForm,
  News,
  Notifications,
  Profile,
  Admin,
  Users,
  Events,
} from 'features'
import { Content } from 'common/ui-kit'

import Sidebar from './components/sidebar'
import NotAuthorized from '../notAuthorized'

function PortalPage() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Content>
          <Switch>
            <PrivateRoute exact path="/admin" roles="admin" component={Admin} />
            <PrivateRoute
              exact
              path="/admin/users"
              roles="admin"
              component={Users}
            />
            <PrivateRoute
              exact
              path="/admin/events"
              roles="admin"
              component={Events}
            />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/request" component={RequestForm} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/" component={News} />
            <Route exact path="/403" component={NotAuthorized} />
            <Route default>
              <Redirect to="/404" />
            </Route>
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}

export default PortalPage
