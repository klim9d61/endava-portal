import React from 'react'
import { Switch, Route } from 'react-router'
import { Layout } from 'antd'

import { Content } from 'common/ui-kit'
import { Header, Footer } from 'core/components'
import { PortalPage, LoginPage, NotFoundPage } from 'pages/index'

import './App.css'

function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <Switch>
          <Route path="/home" component={PortalPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Content>
      <Footer />
    </Layout>
  )
}

export default App
