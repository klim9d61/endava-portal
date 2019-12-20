import React from 'react'
import { List, Avatar } from 'antd'
import { shape, string } from 'prop-types'
import { defaultImg } from '../news-page/constants'

const NotificationItem = ({ item }) => {
  const { title, href, avatar, description, content } = item

  return (
    <List.Item
      key={title}
      extra={<img width={150} alt="logo" src={href || defaultImg} />}
    >
      <List.Item.Meta
        avatar={<Avatar src={avatar} />}
        title={<a href={href}>{title}</a>}
        description={description}
      />
      {content}
    </List.Item>
  )
}

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
