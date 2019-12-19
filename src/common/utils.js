import React from 'react'
import * as shortId from 'short-id'
import { Icon, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Item, SubMenu } = Menu

// eslint-disable-next-line import/prefer-default-export
export const MenuCreator = menuListItems =>
  menuListItems.map(({ submenu, path, name, icon }, index) =>
    submenu.length ? (
      <SubMenu
        key={index}
        title={
          <Link to={path}>
            <Icon type={icon} />
            <span>{name}</span>
          </Link>
        }
      >
        {MenuCreator(submenu)}
      </SubMenu>
    ) : (
      <Item key={index}>
        <Link to={path}>
          <Icon type={icon} />
          <span>{name}</span>
        </Link>
      </Item>
    ),
  )
