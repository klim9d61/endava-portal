import React from 'react'
import { List, Avatar } from 'antd'

export const NotificationItem = ({ item }) => (
  <List.Item
    key={item.title}
    extra={
      <img
        width={150}
        alt="logo"
        src="https://www.endava.com/-/media/EndavaDigital/Endava/Images/MetaDataImages/preview-image.ashx"
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
