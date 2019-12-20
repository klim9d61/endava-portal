import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { shape, func, string, bool } from 'prop-types'
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

  const { history, user, flag } = props

  const handleLogout = () => {
    setModalVisible(false)
    setTimeout(() => {
      localStorage.removeItem('currentUser')
      history.push('/login')
    }, 700)
  }

  const handleModalVisibility = () => setModalVisible(!modalVisible)
  const link = `/profile/${user.id}`
  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  return (
    <StyledNavigationBar>
      <NavigationLogo>
        <Link to="/">
          <img src={Logo} alt="nav-logo" />
        </Link>
      </NavigationLogo>
      {currentUser && (
        <NavigationUserInfo>
          <CurrentUser>
            <Link to={link}>
              <img
                src={flag ? user.logo : `${user.logo}?img=${user.id}`}
                alt="logo-img"
              />
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
  user: func,
  logo: string,
  flag: bool,
}

export default withRouter(PageHeader)
