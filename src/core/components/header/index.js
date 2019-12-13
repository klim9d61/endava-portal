import React from 'react'
import { Link } from 'react-router-dom'
import { shape, func } from 'prop-types'
import { withRouter } from 'react-router'

import Logo from 'assets/portal-logo.png'

import {
  StyledNavigationBar,
  NavigationLogo,
  CurrentUser,
  ExitLink,
  NavigationUserInfo,
} from './styled-components'

const PageHeader = ({ history }) => {
  const user = JSON.parse(localStorage.getItem('currentUser'))

  const logout = () => {
    setTimeout(() => {
      localStorage.removeItem('currentUser')
      history.push('/login')
    }, 700)
  }

  return (
    <StyledNavigationBar>
      <NavigationLogo>
        <Link to="/">
          <img src={Logo} alt="nav-logo" />
        </Link>
      </NavigationLogo>
      {user && (
        <NavigationUserInfo>
          <CurrentUser>
            <Link to="/profile">
              <img src={user.logo} alt="logo-img" />
              <strong>{`${user.firstName} ${user.lastName}`}</strong>
            </Link>
          </CurrentUser>
          <ExitLink onClick={logout}> Log out </ExitLink>
        </NavigationUserInfo>
      )}
    </StyledNavigationBar>
  )
}

PageHeader.propTypes = {
  history: shape({ push: func.isRequired }).isRequired,
}

export default withRouter(PageHeader)
