import React from 'react'
import { Layout } from 'antd'
import { arrayOf, object } from 'prop-types'

import { Content } from 'common/ui-kit'
// eslint-disable-next-line import/no-cycle
import Routes from 'common/components/routes'

import Sidebar from './components/sidebar'

function PortalPage({ routes }) {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <Routes routes={routes} />
        </Content>
      </Layout>
    </Layout>
  )
}

PortalPage.propTypes = {
  routes: arrayOf(object).isRequired,
}

export default PortalPage
