import React from 'react'
import { Layout } from 'antd'
import { Redirect, Route, Switch } from 'react-router'

import {
  CalendarRBC,
  Vacations,
  RequestMaterials,
  News,
  Notifications,
  Profile,
  Admin,
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
            <Route path="/admin" component={Admin} />
            <Route exact path="/calendar" component={CalendarRBC} />
            <Route exact path="/vacations" component={Vacations} />
            <Route exact path="/materials" component={RequestMaterials} />
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
