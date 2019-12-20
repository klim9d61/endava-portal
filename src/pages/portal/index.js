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
} from 'features'
import { Content } from 'common/ui-kit'

import NotAuthorized from '../notAuthorized'
import Sidebar from './components/sidebar'

const PortalPage = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Content>
          <Switch>
            <PrivateRoute path="/admin" roles="admin" component={Admin} />
            <Route exact path="/calendar" component={Calendar} />
            <Route exact path="/request" component={RequestForm} />
            <Route exact path="/notifications" component={Notifications} />
            <Route exact path="/profile/:id" component={Profile} />
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
