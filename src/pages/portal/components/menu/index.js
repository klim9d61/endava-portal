import React, { useState, useEffect } from 'react'

import { MenuCreator } from 'common/utils'
import menuListItems from 'pages/portal/menuList'

import { SidebarMenu, MenuWrapper } from './styled-components'

const MenuList = () => {
  const [isSticky, setSticky] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 65) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <MenuWrapper>
      <SidebarMenu
        theme="dark"
        mode="inline"
        sticky={isSticky ? 'true' : 'false'}
      >
        {MenuCreator(menuListItems)}
      </SidebarMenu>
    </MenuWrapper>
  )
}

export default MenuList
