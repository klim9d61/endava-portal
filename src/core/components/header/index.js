import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../../../assets/portal-logo.png'

import { userName, userLogo } from './utils'
import {
  StyledNavigationBar,
  NavigationLogo,
  CurrentUser,
  ExitLink,
  NavigationUserInfo,
} from './styled-components'

const PageHeader = () => (
  <StyledNavigationBar>
    <NavigationLogo>
      <Link to="/">
        <img src={Logo} alt="nav-logo" />
      </Link>
    </NavigationLogo>
    <NavigationUserInfo>
      <CurrentUser>
        <Link to="/">
          <img src={userLogo} alt="logo-img" />
          <strong>{userName}</strong>
        </Link>
      </CurrentUser>
      <ExitLink>
        <Link to="/login">Log out</Link>
      </ExitLink>
    </NavigationUserInfo>
  </StyledNavigationBar>
)

export default PageHeader
