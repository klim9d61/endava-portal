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

const PageHeader = ({ history }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const user = JSON.parse(localStorage.getItem('currentUser'))

  const handleLogout = () => {
    setModalVisible(false)
    setTimeout(() => {
      localStorage.removeItem('currentUser')
      history.push('/login')
    }, 700)
  }

  const handleModalVisibility = () => setModalVisible(!modalVisible)

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
          <NavigationExit>
            <ExitLink onClick={handleModalVisibility}> Log out </ExitLink>
          </NavigationExit>
          {modalVisible && (
            <ModalLogout
              title="Log out"
              visible={modalVisible}
              onOk={handleLogout}
              onCancel={handleModalVisibility}
            >
              <p>Are you sure ?</p>
            </ModalLogout>
          )}
        </NavigationUserInfo>
      )}
    </StyledNavigationBar>
  )
}

PageHeader.propTypes = {
  history: shape({ push: func.isRequired }).isRequired,
}

export default withRouter(PageHeader)
