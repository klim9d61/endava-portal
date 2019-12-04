import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import { Layout } from 'antd'

import { Content } from 'common/ui-kit'
import { Header, Footer } from 'core/components'
import { PortalPage, LoginPage, NotFoundPage } from 'pages/index'

import './App.css'

const isLogged = true

function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Route path="/*">
            {isLogged ? <PortalPage /> : <Redirect to="/login" />}
          </Route>
        </Switch>
      </Content>
      <Footer />
    </Layout>
  )
}

export default App
