import styled from 'styled-components'
import { List } from 'antd'

const NotificationsContainer = styled(List)`
  .ant-list-items {
    background: transparent;
  }

  .ant-list-item {
    width: 100%;
    background-color: #fff;
    margin: 1rem 0;
    padding: 1rem;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #fcfafa;
      transform: scale(1.01);
    }
  }

  .ant-list-item-extra {
    display: flex;
    align-items: center;
  }
`

export default NotificationsContainer
