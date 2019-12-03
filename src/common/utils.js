import React from 'react'
import uuid from 'uuid'
import { Icon, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Item, SubMenu } = Menu

// eslint-disable-next-line import/prefer-default-export
export const MenuCreator = menuListItems => {
  return menuListItems.map(item => {
    return item.submenu.length ? (
      <SubMenu
        key={uuid()}
        title={
          <Link to={item.path}>
            <Icon type={item.icon} />
            <span>{item.name}</span>
          </Link>
        }
      >
        {MenuCreator(item.submenu)}
      </SubMenu>
    ) : (
      <Item key={uuid()}>
        <Link to={item.path}>
          <Icon type={item.icon} />
          <span>{item.name}</span>
        </Link>
      </Item>
    )
  })
}
