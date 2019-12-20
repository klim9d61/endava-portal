import React from 'react'
import { Row, Col } from 'antd'

import { notificationsData } from '__mocks__/mock-data'

import NotificationsContainer from './styled-components'
import NotificationItem from './NotificationItem'

const Notifications = () => (
  <Row type="flex" justify="center" align="middle">
    <Col span={20}>
      <NotificationsContainer
        itemLayout="vertical"
        size="large"
        dataSource={notificationsData}
        renderItem={item => <NotificationItem item={item} />}
      />
    </Col>
  </Row>
)

export default Notifications
