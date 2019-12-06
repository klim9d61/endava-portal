import React from 'react'
import { Layout } from 'antd'
import { Redirect, Route, Switch } from 'react-router'

import {
  CalendarRBC,
  Vacations,
  Materials,
  News,
  Notifications,
} from 'features'
import { Content } from 'common/ui-kit'

import Sidebar from './components/sidebar'

function PortalPage() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Switch>
            <Route exact path="/calendar" component={CalendarRBC} />
            <Route exact path="/vacations" component={Vacations} />
            <Route exact path="/materials" component={Materials} />
            <Route exact path="/notifications" component={Notifications} />
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
