import React from 'react'
import { Row, Tabs } from 'antd'

import RequestMaterials from 'features/RequestForm/RequestMaterials'
import RequestVacation from 'features/RequestForm/RequestVacation'
import { requestMaterials, requestVacation } from 'features/constants'

const { TabPane } = Tabs
const RequestForm = () => (
  <Row type="flex" justify="center">
    <Tabs
      style={{
        width: '50%',
        float: 'center',
      }}
      defaultActiveKey="1"
      size="large"
    >
      <TabPane tab={requestMaterials} key="1">
        <RequestMaterials />
      </TabPane>
      <TabPane tab={requestVacation} key="2">
        <RequestVacation />
      </TabPane>
    </Tabs>
  </Row>
)

export default RequestForm
