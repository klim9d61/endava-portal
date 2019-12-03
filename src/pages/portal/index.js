import React from 'react'
import { Layout } from 'antd'
import { Route, Switch } from 'react-router'

import { NotFoundFeature, Calendar, Vacations, Materials, News } from 'features'
import { Content } from 'common/ui-kit'

import Sidebar from './components/sidebar'

function PortalPage() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Switch>
            <Route exact path="/home/calendar" component={Calendar} />
            <Route exact path="/home/vacations" component={Vacations} />
            <Route exact path="/home/materials" component={Materials} />
            <Route exact path="/home" component={News} />
            <Route default component={NotFoundFeature} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  )
}

export default PortalPage
