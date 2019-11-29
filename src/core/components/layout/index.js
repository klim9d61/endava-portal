import React from 'react'
import { Layout } from 'antd'
import { Route, Switch } from 'react-router'

import { LoginPage, NotFoundPage, PortalPage } from '../../../pages'
import { Content } from '../../../common/ui-kit'
import Header from '../header'
import Footer from '../footer'

function PageLayout() {
  return (
    <div>
      <Layout>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/" component={PortalPage} />
            <Route path="/*" component={NotFoundPage} />
          </Switch>
        </Content>
        <Footer />
      </Layout>
    </div>
  )
}

export default PageLayout
