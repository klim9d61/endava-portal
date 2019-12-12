import styled from 'styled-components'

import { Header } from 'common/ui-kit'

export const StyledNavigationBar = styled(Header)`
  color: #fff;
  display: flex;
  justify-content: space-between;
  background-color: #001529;
  padding: 0 80px;
`

export const NavigationLogo = styled.div`
  img {
    width: 100px;
    padding-bottom: 7px;
    border-bottom: 3px solid transparent;
    transition: 0.3s ease-in-out;
    &:hover {
      border-bottom: 3px solid #de411b;
    }
  }
`

export const NavigationUserInfo = styled.div`
  a {
    color: #d3d3d3;
  }
  display: flex;
  margin-left: 15px;
  font-size: 18px;
  font-weight: 500;
`

export const CurrentUser = styled.div`
  position: relative;
  display: flex;
  margin-left: 40px;
  img {
    position: absolute;
    top: 11px;
    left: -50px;
    width: 40px;
    height: 40px;
  }
  strong {
    margin: 0 5px;
    padding-bottom: 5px;
    border-bottom: 3px solid transparent;
    transition: 0.3s ease-in-out;
  }

  a:hover strong {
    border-color: #de411b;
  }
`

export const ExitLink = styled.div`
  a {
    padding-bottom: 5px;
    border-bottom: 3px solid transparent;
    transition: 0.3s ease-in-out;
    &:hover {
      border-color: #de411b;
    }
  }
  margin-left: 40px;
`
