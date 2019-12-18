import React from 'react'
import { Layout } from 'antd'
import { Redirect, Route, Switch } from 'react-router'

import {
  CalendarRBC,
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

function PortalPage() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Content>
          <Switch>
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/users" component={Users} />
            <Route exact path="/admin/events" component={Events} />
            <Route exact path="/calendar" component={CalendarRBC} />
            <Route exact path="/request" component={RequestForm} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/" component={News} />
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
