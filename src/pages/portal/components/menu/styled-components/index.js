import { Menu } from 'antd'
import styled from 'styled-components'

export const MenuWrapper = styled.div`
  position: relative;
`

export const SidebarMenu = styled(Menu)`
  position: ${props => (props.sticky === 'true' ? 'fixed' : '')};
  width: auto;
  top: 0;
  left: 0;
  z-index: 1;
`
