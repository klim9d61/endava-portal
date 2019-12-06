import React from 'react'
import { Menu } from 'antd'

import { MenuCreator } from 'common/utils'

import menuListItems from '../../menuList'

const MenuList = () => (
  <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" title="privet">
    {MenuCreator(menuListItems)}
  </Menu>
)

export default MenuList
