import React from 'react'
import { NotificationsContainer } from './styled-components'
import { NotificationItem } from './NotificationItem'
import { listData } from './constants'

const styles = {
  width: '100%',
}

const Notifications = () => (
  <NotificationsContainer
    style={styles}
    itemLayout="vertical"
    size="large"
    dataSource={listData}
    renderItem={item => <NotificationItem item={item} />}
  />
)

export default Notifications
