import React, { useState } from 'react'
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
  NavigationExit,
  ModalLogout,
} from './styled-components'

const PageHeader = props => {
  const [modalVisible, setModalVisible] = useState(false)

  const { history, user, logo } = props

  const handleLogout = () => {
    setModalVisible(false)
    setTimeout(() => {
      localStorage.removeItem('currentUser')
      history.push('/login')
    }, 700)
  }

  const handleModalVisibility = () => setModalVisible(!modalVisible)
  const link = `/profile/${user.id}`

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
            <Link to={link}>
              <img src={logo} alt="logo-img" />
              <strong>{`${user.firstName} ${user.lastName}`}</strong>
            </Link>
          </CurrentUser>
          <NavigationExit>
            <ExitLink onClick={handleModalVisibility}>
              <span style={{ fontSize: 32 }} role="img" aria-label="octopus">
                &#128025;
              </span>
            </ExitLink>
          </NavigationExit>
          {modalVisible && (
            <ModalLogout
              title="Log out"
              visible={modalVisible}
              onOk={handleLogout}
              onCancel={handleModalVisibility}
            >
              <p>Are you sure?</p>
            </ModalLogout>
          )}
        </NavigationUserInfo>
      )}
    </StyledNavigationBar>
  )
}

PageHeader.propTypes = {
  history: shape({ push: func.isRequired }).isRequired,
  user: func.isRequired,
  logo: String.isRequired,
}

export default withRouter(PageHeader)
