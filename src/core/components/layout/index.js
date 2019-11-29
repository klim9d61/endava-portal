import React from 'react'
import { Layout } from 'antd'
import { Route, Switch } from 'react-router'

import { LoginPage, NotFoundPage, PortalPage } from '../../../pages'
import { Content } from '../../../common/ui-kit'
import PATH_URL from '../../routes'
import Header from '../header'
import Footer from '../footer'

function PageLayout() {
  return (
    <div>
      <Layout>
        <Header />
        <Content>
          <Switch>
            <Route exact path={PATH_URL.LOGIN} component={LoginPage} />
            <Route exact path={PATH_URL.PORTAL} component={PortalPage} />
            <Route path={PATH_URL.NOT_FOUND_PAGE} component={NotFoundPage} />
          </Switch>
        </Content>
        <Footer />
      </Layout>
    </div>
  )
}

export default PageLayout
