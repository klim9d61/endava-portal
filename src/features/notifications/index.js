import React from 'react'
import { Row, Col } from 'antd'
import { uniqueId } from '../news-page/constants'

import NotificationsContainer from './styled-components'
import NotificationItem from './NotificationItem'

const Notifications = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('currentUser')) || []
  const notifications = JSON.parse(localStorage.getItem('notifications')) || []
  let notificationsData = []

  if (loggedInUser.role === 'admin') {
    const requestMaterials =
      JSON.parse(localStorage.getItem('Request Materials')) || []

    const requestedMaterials = requestMaterials.map(req => ({
      id: uniqueId(),
      title: `${req['Full Name']} Requested Materials`,
      href: null,
      avatar: 'https://i.pravatar.cc/300',
      description: req['it-accessories'],
      content: req['Note'],
    }))

    const requestVacation =
      JSON.parse(localStorage.getItem('Request Vacation')) || []

    const requestedVacation = requestVacation.map(req => ({
      id: uniqueId(),
      title: `${req['Full Name']} Requested Vacation`,
      href: null,
      avatar: 'https://i.pravatar.cc/300',
      description: `Vacation Request: ${req['rangeVacation']}`,
      content: req['Note'],
    }))

    notificationsData = [].concat(
      requestedMaterials,
      requestedVacation,
      notifications,
    )
  } else {
    notificationsData = JSON.parse(localStorage.getItem('notifications'))
  }

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
