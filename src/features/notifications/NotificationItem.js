import React from 'react'
import { List, Avatar } from 'antd'
import { shape, string } from 'prop-types'

const NotificationItem = ({ item }) => (
  <List.Item
    key={item.title}
    extra={
      <img
        width={150}
        alt="logo"
        src="http://www.realwire.com/writeitfiles/endava.jpg"
      />
    }
  >
    <List.Item.Meta
      avatar={<Avatar src={item.avatar} />}
      title={<a href={item.href}>{item.title}</a>}
      description={item.description}
    />
    {item.content}
  </List.Item>
)

NotificationItem.propTypes = {
  item: shape({
    href: string.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    avatar: string.isRequired,
    content: string.isRequired,
  }).isRequired,
}

export default NotificationItem
