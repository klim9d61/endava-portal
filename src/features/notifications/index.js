import React from 'react'
import { Row, Col } from 'antd'
import { NotificationsContainer } from './styled-components'
import { NotificationItem } from './NotificationItem'
import listData from '__mocks__/mock-data'

const Notifications = () => (
  <Row type="flex" justify="center" align="middle">
    <Col span={24}>
      <NotificationsContainer
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={item => <NotificationItem item={item} />}
      />
    </Col>
  </Row>
)

export default Notifications
