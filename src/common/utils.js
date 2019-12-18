import React from 'react'
import * as shortId from 'short-id'
import { Icon, Menu } from 'antd'
import { NavLink } from 'react-router-dom'

const { Item, SubMenu } = Menu

// eslint-disable-next-line import/prefer-default-export
export const MenuCreator = menuListItems =>
  menuListItems.map(({ submenu, path, name, icon }) =>
    submenu.length ? (
      <SubMenu
        key={shortId.generate()}
        title={
          <NavLink
            exact
            to={path}
            activeStyle={{
              fontWeight: 'bold',
              color: 'red',
            }}
          >
            <Icon type={icon} />
            <span>{name}</span>
          </NavLink>
        }
      >
        {MenuCreator(submenu)}
      </SubMenu>
    ) : (
      <Item key={shortId.generate()}>
        <NavLink
          exact
          to={path}
          activeStyle={{
            fontWeight: 'bold',
            color: 'red',
          }}
        >
          <Icon type={icon} />
          <span>{name}</span>
        </NavLink>
      </Item>
    ),
  )
