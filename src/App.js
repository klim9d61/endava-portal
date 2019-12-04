import React from 'react'
import { Switch, Route } from 'react-router'
import { Layout } from 'antd'

import { Content } from 'common/ui-kit'
import { Header, Footer } from 'core/components'
import { PortalPage, LoginPage, NotFoundPage } from 'pages'

import './App.css'

function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route exact path="/*" component={PortalPage} />
        </Switch>
      </Content>
      <Footer />
    </Layout>
  )
}

export default App
