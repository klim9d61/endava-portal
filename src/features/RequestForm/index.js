import React from 'react'
import { Row, Tabs } from 'antd'

import { requestMaterialsTitle, requestVacationTitle } from 'features/constants'
import { setTypeForm } from 'common/utils'
import listMaterials from 'pages/portal/formListMaterials'
import listVacation from 'pages/portal/formListVacation'

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
      <TabPane tab={requestMaterialsTitle} key="1">
        {setTypeForm(listMaterials, requestMaterialsTitle)}
      </TabPane>
      <TabPane tab={requestVacationTitle} key="2">
        {setTypeForm(listVacation, requestVacationTitle)}
      </TabPane>
    </Tabs>
  </Row>
)

export default RequestForm
