import React from 'react'
import { Row, Tabs } from 'antd'

import MaterialIts from 'features/MaterialsIts/MaterialIts'
import Request from 'features/Request/Request'

const { TabPane } = Tabs
const RequestMaterials = () => {
  return (
    <>
      <Row type="flex" justify="center">
        <Tabs
          style={{
            width: '50%',
            float: 'center',
          }}
          defaultActiveKey="1"
          size="large"
        >
          <TabPane tab="Tab 1" key="1">
            <MaterialIts />
          </TabPane>
          <TabPane tab="Tab 2" key="2">
            <Request />
          </TabPane>
        </Tabs>
      </Row>
    </>
  )
}

export default RequestMaterials
