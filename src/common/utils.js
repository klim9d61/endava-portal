import React from 'react'
import * as shortId from 'short-id'
import { Icon, Menu } from 'antd'
import { Link } from 'react-router-dom'

const { Item, SubMenu } = Menu

// eslint-disable-next-line import/prefer-default-export
export const MenuCreator = menuListItems =>
  menuListItems.map(({ submenu, path, name, icon }) =>
    submenu.length ? (
      <SubMenu
        key={shortId.generate()}
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
      <Item key={shortId.generate()}>
        <Link to={path}>
          <Icon type={icon} />
          <span>{name}</span>
        </Link>
      </Item>
    ),
  )
