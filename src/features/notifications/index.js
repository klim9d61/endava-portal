import React from 'react'
import { Row, Col } from 'antd'
import NotificationsContainer from './styled-components'
import NotificationItem from './NotificationItem'
// import { notificationsData } from '__mocks__/mock-data'

const Notifications = () => {
  const notificationsData = JSON.parse(localStorage.getItem('notifications'))

  return (
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
}

export default Notifications
