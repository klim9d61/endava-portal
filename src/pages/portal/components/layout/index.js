import React from 'react'
import { Layout } from 'antd'

import { Content } from '../../../../common/ui-kit'
import Sidebar from '../sidebar'
import NewsPage from '../../../../features/news-page'

function GridLayout() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sidebar />
      <Layout>
        <Content style={{ margin: '0 16px' }}>
          <NewsPage />
        </Content>
      </Layout>
    </Layout>
  )
}

export default GridLayout
