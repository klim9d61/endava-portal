import React from 'react'
import { Switch } from 'react-router'
import { Layout } from 'antd'

import Routes from 'common/components/routes'
import { Content } from 'common/ui-kit'
import { Header, Footer } from 'core/components'
import routes from 'core/routes'

import './App.css'

function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <Switch>
          <Routes routes={routes} />
        </Switch>
      </Content>
      <Footer />
    </Layout>
  )
}

export default App
